const ast_util = require("./ast_util.js");

var symtbl;
var pipeline_next_state = {};
var pipeline_states = [];
var curr_mod_ast = null;
var scope_names = [];
var strglobals = [];

const PFUNC = "_";
const PVAR = "";
const SPTR = "_p";

function fcall(ast){
	var str="";
	if(ast.qid.join("_") !== "next"){
		str = str + get_scoped_name(ast.qid, PFUNC) +"(";
		for(var i=0;i<ast.params.length;i++){
			if(i > 0) str += ", ";
			str = str + expr(ast.params[i].expr);
		}
		str += ")";
	}
	else
	{
		var scoped_name = get_scoped_name();//get the scoped name of current flow.
		var next_state = pipeline_next_state[scoped_name];
		next_state = pipeline_states[next_state];
		var flow_params = next_state.flowdef.params;
		for(var i=0;i<ast.params.length;i++){
			var flow_param = flow_params[i];
			var scoped_param_name = PVAR + next_state.qname + "_" + flow_param.id;
			if(flow_param){
				var expr_str = expr(ast.params[i].expr);
				if(flow_param.type.dim){//array param
					expr_str = "&(" + expr_str + ")";//assign address.
					scoped_param_name = scoped_param_name + SPTR;
				}
				var param_assign = scoped_param_name + " = " + expr_str + "; ";
				str += param_assign;
			}else{
				vtbuild.error("Flow param mismatch for ", next_state.name, ". flow from ", scoped_name);
			}
		}
		str +=  "__state = __" + next_state.qname;
	}
	return str;
}

function expr(ast){
	// console.log(ast);
	var str="";
	var id = ast.id || ast.qid;	
	if(typeof ast.op != 'undefined'){
		// console.log(ast);
		str = "("+expr(ast.lexpr) + ast.op + expr(ast.rexpr)+")";
	}
	else if(id){
		if(ast.qid && ast.qid.length > 1){
			//Variables used with '.' operator must be simply expanded.
			str = str + get_scoped_name(ast.qid);
		}else{
			var sym = symtbl.lookup(id);
			if(sym && !sym.info.is_temp){
				str = str + ast_util.get_scoped_name(sym, "_", PVAR);
			}else{
				str = str + id;//loop variables are not in symbol table now.
				if(!sym){
					vtbuild.warning("Symbol ", id , " not found");
				}
			}
		}
        if(typeof ast.dim != 'undefined'){
            for(var i in ast.dim.dim){
                str=str + "[" + expr(ast.dim.dim[i]) + "]";
            }
        }
	}
	else if(typeof ast.iconst != 'undefined'){
		str = ast.iconst;
	}
	else if(typeof ast.fcall != 'undefined'){
		str = fcall(ast.fcall);
	}
	return str;
}

function block(ast,str){
	str.push("{");
	if(typeof ast.stmts != 'undefined'){
		for(var i in ast.stmts){
			stmt(ast.stmts[i],str);
		}
	}
	str.push("}");
}

function stmt(ast,strbuf){
	switch(ast.kind){
		case "assign":
			strbuf.push(expr(ast) + "=" + expr(ast.expr) + ";");
			break;
		case "if":
			// console.log(ast);
			strbuf.push("if(" + expr(ast.expr) + ")");
			stmt(ast.if_body,strbuf);
			if(typeof ast.else_body !='undefined'){
				strbuf.push("else");
				stmt(ast.else_body,strbuf)
			}
			break;
		case "for":
			var idxstr = ast.ids[0];
			strbuf.push("for(int " + idxstr + "=" + expr(ast.range.from) + "; " + idxstr + "<" + expr(ast.range.to) + "; " + idxstr + "++)");
			stmt(ast.body,strbuf);
			break;
		case "while":
			strbuf.push("while(" + expr(ast.expr) + ")");
			stmt(ast.body,str);
			break;
		case "return":
			strbuf.push("return " + expr(ast.expr));
			break;
		case "block":
			block(ast,strbuf);
			break;
		case "fcall":
			var s = fcall(ast.fcall) + ";" ;
			strbuf.push(s);
		break;
	}

}

function stringify_type(ast){
	// console.log(ast);
	var primitive=ast.primitive;
	var dim="";
	if(typeof ast.dim != 'undefined')
		for(var i in ast.dim.dim){
			dim=dim+"["+expr(ast.dim.dim[i])+"]";
		}
	return {primitive: primitive, dim: dim};
}

function vardef(ast)
{	
	var s="";
	if(ast.type.dim && !ast.type.is_const){
		return null;//for RAM arrays we do our own memory allocation.
	}
	// console.log(ast.type.is_const);
	if(typeof ast.type.is_const != 'undefined'){
		if(ast.type.is_const === true)
			s=s+"const ";
	}
	var type = stringify_type(ast.type);
	s=s+type.primitive+" ";
	// console.log(s);
	var temp=[];
	for(var i in ast.defs){
		var def = ast.defs[i];
		var sym = symtbl.lookup(def.id);
		var name = (!sym || sym.info.is_temp) ? def.id : get_scoped_name(def.id, PVAR);
		if(typeof def.init != 'undefined')
			temp.push(name+type.dim+"="+expr(def.init));
		else
			temp.push(name+type.dim);
	}
	s=s+temp.join(", ");
	return s;
}

function fparam(ast){
	var s="";
	if(typeof ast.type.is_const != 'undefined'){
		if(ast.type.is_const === true)
			s=s+"const ";
	}
	var type=stringify_type(ast.type);
	var name = get_scoped_name(ast.id, PVAR);

	if(typeof ast.init != 'undefined')
		s=s+type.primitive+" "+ name + "="+expr(ast.init);	
	else
		s=s+type.primitive+" " + name;	
	return s;
}

function fdef(ast,strbuf){
    symtbl.enterNestedScope(ast.id);
	var hdr="";
	if(typeof ast.type != 'undefined'){
		hdr = hdr + ast.type.primitive + " ";
	}
	else{
		hdr= hdr+"void ";
	}
	hdr = hdr + get_scoped_name(ast.id, PFUNC) + "(";
	if(ast.flow){
		//for flow routines params are globally assigned.
		for(var i=0;i<ast.params.length;i++){
			var param = ast.params[i];
			var stype = stringify_type(param.type);
			var scoped_name = PVAR + get_scoped_name(param.id);
			var scoped_name_p = scoped_name + SPTR;
			var def =  str_parray(stype.primitive, scoped_name_p, stype.dim) + ";" ;
			strglobals.push(def);
			def = "#define " + scoped_name + " (*" + scoped_name_p +")";
			strglobals.push(def);
		}

	}else{
		var params=[];
		for(var i in ast.params){
			params.push(fparam(ast.params[i]));
		}	
		hdr = hdr+ params.join(", ");
	}
	hdr = hdr + ")";
	strbuf.push(hdr);

	strbuf.push("{");
	// str.push("__state = __" + states[0] + ";");
	// cur_ind=0;

	for(var i =0;i<ast.vars.length;i++){
		var strdef = vardef(ast.vars[i]);
		if(strdef){
			strbuf.push(strdef + ";");
		}
	}
	stmt(ast.body,strbuf);
    strbuf.push("}");
    symtbl.exitNestedScope();
}

function str_parray(elemtype, name, dimstr){
	return elemtype + " (*" + name + ")" + dimstr;
}

function memdefs(mem){
	strglobals.push("/*Managed memory variables*/");
	strglobals.push("unsigned char __vtmem[" +  mem.total_alloc_size + "];");
	for(var i=0;i<mem.alloc.length;i++){
		var alloc = mem.alloc[i];
		var scoped_name = PVAR + ast_util.get_scoped_name(alloc.sym);
		var scoped_name_p =  scoped_name + SPTR;
		var stype = stringify_type(alloc.sym.info.type);
		var def = 	  str_parray(stype.primitive, scoped_name_p, stype.dim) 
					+ "= (" 
					+ str_parray(stype.primitive, "", stype.dim) 
					+ ") "
					+ "&__vtmem[" + alloc.loc + "];"
					;
		strglobals.push(def);
		def = "#define " + scoped_name + " (*" + scoped_name_p +")";
		strglobals.push(def);
	}
	strglobals.push("/*End of managed memory variables*/");
}

function get_scoped_name(n, pfx){
	if(Array.isArray(n)){
		if(n.length > 1){//this is already a scoped name. so don't add our scopes to it.
			return n.join(".");
		}else{
			n = n[0];
		}
	}
	if(!pfx){
		pfx = "";
	}
	if(!n || n === ""){//just return scoped name of the current scope stack.
		return pfx + scope_names.join("_");
	}else{
		return pfx + scope_names.join("_") + "_" + n;
	}
}


function boiler_plate(){
	strglobals.push("/************************************************************");
	strglobals.push("This code is automatically generated by the VerticalThings compiler. DO NOT EDIT!");
	strglobals.push("************************************************************/");
}

function code_gen(ast,ctx){
	// console.log("asdasd");

	boiler_plate();

	if(!ctx.code){
		ctx.code = [];
	}
	var code = ctx.code;
	symtbl = ctx.symtbl;

	memdefs(ctx.mem);
   
    var current_pipeline_entry = ast_util.first_pipeline_entry(ast);

	var pipeline_state_names = [];

	var curr_idx = 0;
    while(current_pipeline_entry){
    	var qname = current_pipeline_entry.qname;
   		var mod_ast = ast.modules[qname[0]];
   		var flow_def = ast_util.find_flow(mod_ast, qname[1]);

    	if(qname.length === 1){
    		qname.push(flow_def.id);//add the default flow's id to the qname.
    	}

   		qname =  qname.join("_");

    	var next_idx = 0;//default to the first state.
    	if(current_pipeline_entry.next){
    		next_idx = curr_idx + 1;
    	}
    	
    	pipeline_next_state[qname] = next_idx;
    	
    	pipeline_states.push({qname: qname, flowdef: flow_def});
    	
    	pipeline_state_names.push(qname);//for convenience.

    	current_pipeline_entry = current_pipeline_entry.next;    	
    	curr_idx++;
    }

    code.push("typedef enum " + "{ __" + pipeline_state_names.join(", __") + "} " + " __" + ast.pipeline.name + ";");
    code.push( " __" + ast.pipeline.name + " __state = __" + pipeline_state_names[0] + ";");

    for(var mod_name in ast.modules){
    	scope_names.push(mod_name);
        symtbl.enterNestedScope(mod_name);    	
        var mod_ast = ast.modules[mod_name];
        curr_mod_ast = mod_ast;
	
		strglobals.push("/*Module vars for " + mod_name + "*/");
		for(var i =0;i<mod_ast.vars.length;i++){
			var strdef = vardef(mod_ast.vars[i]);
			if(strdef){
				strglobals.push(strdef + ";");
			}
		}
		strglobals.push("/*End of module vars for " + mod_name + "*/");

        for(var i=0;i<mod_ast.fdefs.length;i++){
        	scope_names.push(mod_ast.fdefs[i].id);
            fdef(mod_ast.fdefs[i], code);
            scope_names.pop();
        }
        scope_names.pop();
        symtbl.exitNestedScope();
    }

    code.push("void loop()");
    code.push("{");
    code.push("switch(__state)");
    code.push("{");
    for(var i=0;i<pipeline_state_names.length;i++){
    	var curr_state_name = pipeline_state_names[i];
        code.push("case __" + curr_state_name + ":");
        code.push("__state = "+ "__" + pipeline_state_names[0] +";");
        code.push("___" + pipeline_state_names[i] + "();");
        code.push("break;");
    }
    code.push("default :");
    code.push("__state = __" + pipeline_state_names[0] + ";");
    code.push("}");
    code.push("}");

    code.push("void setup()");
    code.push("{");
    // Calling all inits
    for(var i =0; i< ast.modules.length;i++){
    	var mod_ast= ast.modules[i];
    	var ast_init = ast_util.find_fdef(mod_ast, "init")
       if(ast_init){
            code.push(PFUNC + mod_ast.name +"_init();");
       }
    }
    code.push("}");

    if(strglobals.length > 0){
    	//add defines to the beginning of code.
		var splice_args = [0, 0].concat(strglobals);
		Array.prototype.splice.apply(code, splice_args);    
	}
    // console.log("CODE :");
    // console.log(code);
    // return code;
};

var cur_mod="";
var states=[];
// codeGen(ast,code);
exports.transform=code_gen;
exports.stmt=stmt;
exports.fdef=fdef;
exports.fparam=fparam;
exports.var=vardef;