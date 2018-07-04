"use strict";
class source{
    constructor(){
        this.code = "";
        this.lines = {};
    }
}
function checkstat(declarations){
    //check's if it is compiler generated code
    var flag = true;
    declarations.forEach(function(variable){
        if (!variable.startsWith("__")){
            flag = false;
        }
    });
    return flag;
}
function get_loop(loopcount,data){
    var temp;
    if (loopcount == 0){
        return data['range']['to']['iconst'] - data['range']['from']['iconst'];    
    }
    data['body']['stmts'].every(function(stat){
        if (stat['kind'] == "for"){
            temp = get_loop(loopcount-1,stat);
            return false;
        }
        return true;
    });
    return temp;
}
function WCETfor(stat,power){
    var analyse = require('./WCET.js');
    var gen = require('../../compiler/src/CodeGen/Codegen.js');
    var code = [];
    modvars.forEach(function(variable){
        code.push(gen.var(variable) + ';');
    });
    funcvars.forEach(function(variable){
        code.push(gen.var(variable) + ';');
    });
    funcparams.forEach(function(variable){
        code.push(gen.params(variable) + ';');
    });
    code.push("int main(){");
    gen.stmt(stat,code);
    code.push("return 0;");
    code.push("}");
    var str = code.join('\n');
    var tmp = require('tmp');
    var tmpobj = tmp.fileSync({ mode: parseInt('0644', 8), prefix: 'code', postfix: '.c' });
    fs.writeFileSync(tmpobj.name,str);
    var execSync = require('child_process').execSync;
    var command = paths['arduino'] + "/packages/arduino/tools/arm-none-eabi-gcc/4.8.3-2014q1/bin/arm-none-eabi-g++ -mcpu=cortex-m0plus -mthumb -c -g -Os -w -std=gnu++11 -ffunction-sections -fdata-sections -fno-threadsafe-statics -nostdlib --param max-inline-insns-single=500 -fno-rtti -fno-exceptions -MMD -DF_CPU=48000000L -DARDUINO=10805 -DARDUINO_SAMD_MKR1000 -DARDUINO_ARCH_SAMD  -D__SAMD21G18A__ -DUSB_VID=0x2341 -DUSB_PID=0x804e -DUSBCON" + '-DUSB_MANUFACTURER="Arduino LLC"' + '-DUSB_PRODUCT="Arduino MKR1000"' + "-I"+paths['arduino']+"/packages/arduino/tools/CMSIS/4.5.0/CMSIS/Include/ -I"+paths['arduino']+"/packages/arduino/tools/CMSIS-Atmel/1.1.0/CMSIS/Device/ATMEL/ -I"+paths['arduino']+"/packages/arduino/hardware/samd/1.6.18/cores/arduino -I"+paths['arduino']+"/packages/arduino/hardware/samd/1.6.18/variants/mkr1000 -I"+paths['arduino']+"/packages/arduino/tools/CMSIS/4.5.0/CMSIS/Include " + tmpobj.name + " -o " + tmpobj.name + ".o";
    //console.log(command);
    execSync(command);
    command = paths['objdump'] + " -d -l " + tmpobj.name +".o > " + tmpobj.name +".asm";
    execSync(command);
    var lines = {};
    var linecount = 1;
    var loopcount = 0;
    code.forEach(function(line){
        if (line.includes("for")){
                lines[linecount] = get_loop(loopcount,stat);
            loopcount = loopcount + 1;
        }
        linecount = linecount + 1;
    });
    var s = new source();
    s.lines = lines;
    s.code = new String(fs.readFileSync(tmpobj.name+".asm").toString());
    var cycles = analyse.analyseWCET(tmpobj.name,s,"cortexm0+",false);
    return cycles*power;
}
function WCETstat(stat,power){
    var result = 0;
    if (stat['kind'] == "for" && checkstat(stat['ids'])){
        result += WCETfor(stat,power);
    }
    else if (stat['kind'] == "for"){
        power = power * (stat['range']['to']['iconst'] - stat['range']['from']['iconst']);
        stat['body']['stmts'].forEach(function(statement){
            result += WCETstat(statement,power);
        });
    }
    else if (stat['kind'] == "if"){
        result += WCETif(stat,power);
    }
    else if (stat['kind'] == "fcall"){
        var x = lookup.lookup_effect(ast,uses,stat['fcall']['qid'],"cpu");
        if (x && Object.keys(x).indexOf("iconst") != -1){
            result += x.iconst;
        }
        else{
            var flag = false;
            var next;
            mod['fdefs'].every(function(func){
                if (func['id'] == stat['fcall']['qid'][0]){
                    flag = true;
                    next = func;
                    return false;
                }
                return true;
            });
            if (flag){
                if (Object.keys(computing).indexOf(stat['fcall']['qid'][0]) != -1 && computing[stat['fcall']['qid'][0]]){
                    //throw compiler error the function is trying to call another function which is already open!!!
                }
                else{
                    var thisfunc = temp;
                    var count = calculatefunction(next);
                    result += power*count;
                    set(thisfunc);
                }
            }
            else{
                //called function is neither there in supporting modules (arduino etc) nor in the present module as well
            }
        }
    }
    return result;
}
function WCETif(data,power){
    var ifcycle = 0;
    var elsecycle = 0;
    data['if_body']['stmts'].forEach(function(stat){
        ifcycle += WCETstat(stat,power);                
    });
    if (Object.keys(data).indexOf("else_body") != -1){
        data['else_body']['stmts'].forEach(function(stat){
            elsecycle += WCETstat(stat,power);                
        });
    }
    return Math.max(ifcycle,elsecycle);
}
var mod;
var modvars;
var ast;
var funcvars;
var funcparams;
var fs = require('fs');
var lookup = require('../../compiler/src/ast_util.js');
var paths;
var uses;
var computing = [];
var WCET = {};
var modulename;
var temp;
function set(func){
    //set's the parameters of the function
    funcparams = func['params'];
    funcvars = func['vars'];
}
function reset(){
    WCET = {};
    computing = {};
}
function calculatefunction(func){
   // console.log(func);
    temp = func;
    computing[func['id']] = true;
    set(func);
    var cyclecount = 0;
    func['body']['stmts'].forEach(function(stat){
        cyclecount += WCETstat(stat,1);
    });
    //console.log("time taken for " +func['id'] + " " + cyclecount);
    if (Object.keys(func).indexOf("flow") != -1){
        WCET['time'] = cyclecount;
    }
    computing[func['id']] = false;
    return cyclecount;
}
function WCETanalysis(data,ctx){
    var start = lookup.first_pipeline_entry(data);
    ast = data;
    paths = ctx.config['build'];
    ctx.WCET = [];
    while (true){
        reset();
        modulename = start['qname'][0];
        WCET["name"] = start['qname'];
        mod = data['modules'][modulename];
        modvars = mod['vars'];
        uses = mod['uses'];
        mod['fdefs'].every(function(func){
            if (func['id'] == start['qname'][1]){
                calculatefunction(func);
                return false;
            }
            return true;
        });
        ctx.WCET.push(WCET);
        if (Object.keys(start).indexOf("next") == -1){
            break;
        }
        start = start.next;
    }
    console.log(ctx);
}
exports.transform = WCETanalysis;