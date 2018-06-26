"use strict";
class source{
    constructor(){
        this.code = "";
        this.lines = {};
    }
}
var analysis = require('./WCET');
var s = new source();
s.code = "00002178 <main>:\nmain():\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:18\n    2178:\tb5f0      \tpush\t{r4, r5, r6, r7, lr}\n    217a:\tb085      \tsub\tsp, #20\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:19\n    2180:\t2400      \tmovs\tr4, #0\n    2182:\t4b14      \tldr\tr3, [pc, #80]\t; (21d4 <main+0x5c>)\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:18 \n    2184:\t2600      \tmovs\tr6, #0\n    2186:\t191b      \tadds\tr3, r3, r4\n    2188:\t9301      \tstr\tr3, [sp, #4]\n    218a:\t4b13      \tldr\tr3, [pc, #76]\t; (21d8 <main+0x60>)\n    218c:\t191b      \tadds\tr3, r3, r4\n    218e:\t9303      \tstr\tr3, [sp, #12]\n    2190:\t2732      \tmovs\tr7, #50\t; 0x32\n    2192:\t4377      \tmuls\tr7, r6\n    2194:\t4b11      \tldr\tr3, [pc, #68]\t; (21dc <main+0x64>)\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:18\n    2196:\t2500      \tmovs\tr5, #0\n    2198:\t19db      \tadds\tr3, r3, r7\n    219a:\t9302      \tstr\tr3, [sp, #8]\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:38\n    219c:\t2700      \tmovs\tr7, #0\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:40 \n    219e:\t9b01      \tldr\tr3, [sp, #4]\n    21a0:\t5958      \tldr\tr0, [r3, r5]\n    21a2:\t9b02      \tldr\tr3, [sp, #8]\n    21a4:\t5959      \tldr\tr1, [r3, r5]\n   21a6:\tf001 f8d7 \tbl\t3358 <__aeabi_fmul>\n    21aa:\t1c01      \tadds\tr1, r0, #0\n    21ac:\t1c38      \tadds\tr0, r7, #0\n   21ae:\tf000 fe49 \tbl\t2e44 <__aeabi_fadd>\n    21b2:\t3504      \tadds\tr5, #4\n    21b4:\t1c07      \tadds\tr7, r0, #0\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:39 \n    21b6:\t2dc8      \tcmp\tr5, #200\t; 0xc8\n    21b8:\td1f1      \tbne.n\t219e <main+0x26>\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:44\n    21ba:\t9b03      \tldr\tr3, [sp, #12]\n    21bc:\t5198      \tstr\tr0, [r3, r6]\n    21be:\t3604      \tadds\tr6, #4\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:34\n    21c0:\t2ec8      \tcmp\tr6, #200\t; 0xc8\n    21c2:\td1e5      \tbne.n\t2190 <main+0x18>\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:32\n    21c4:\t4b06      \tldr\tr3,[pc, #24]\t; (21e0 <main+0x68>)\n    21c6:\t34c8      \tadds\tr4, #200\t; 0xc8\n    21c8:\t429c      \tcmp\tr4, r3\n    21ca:\td1da      \tbne.n\t2182 <main+0xa>\n/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:49\n    21cc:\t2000  \tmovs\tr0, #0\n    21ce:\tb005      \tadd\tsp, #20\n    21d0:\tbdf0      \tpop\t{r4, r5, r6, r7, pc}\n    21d2:\t46c0      \tnop\t\t\t; (mov r8, r8)";
s.lines = {"32":40,"34":40,"39":40};
console.log(analysis.analyseWCET("code.c",s,"cortexm0+",false));