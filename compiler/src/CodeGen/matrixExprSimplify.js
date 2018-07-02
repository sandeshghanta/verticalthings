function transform(ast,ctx){
	for(var i in ast.modules){
		ctx.symtbl.enterNestedScope(i);
		fdefs(ast.modules[i].fdefs,ctx);
		ctx.symtbl.exitNestedScope();
	}
}

function fdefs(ast,ctx){
	for(var i = 0; i < ast.length ; i++){
		ctx.symtbl.enterNestedScope(ast[i].id);
		stmts(ast[i].body.stmts,ctx);
		// console.log(JSON.stringify(ast[i].body.stmts));
		// console.log(JSON.stringify(ctx.symtbl.lookup("$t0")));
		// return 0;
		ctx.symtbl.exitNestedScope();
	}
}

function block(ast,ctx){
	if(typeof ast.stmts != 'undefined'){
		stmts(ast.stmts,ctx);
	}
}

function stmts(ast, ctx){
	for(var i=0;i<ast.length;i++){
		if(typeof ast[i].kind != 'undefined'){
			switch(ast[i].kind){
				case "assign":
					var orig=assign(ast[i], ctx);
					// console.log(block_stmts.length);
					if(block_stmts.length>0){
						ast[i]={kind: "block", stmts: block_stmts, orig: orig};
						block_stmts=[];
					}
					// console.log(JSON.stringify(ast[i]));
					break;
				case "block":
					block(ast[i],ctx);
					break;
				case "for":
					block(ast[i].body,ctx);
					break;
				case "if":
					block(ast[i].if_body,ctx);
					if(ast[i].else_body != 'undefined'){
						block(ast[i].else_body,ctx);
					}
					break;
				case "while":
					block(ast[i].body,ctx);
					break;
			}
		}
	}
}
var change=0;

function assign(ast, ctx){
	var orig = astlib.deep_copy(ast);
	var expre;
	change =1;
	while(change === 1){
		change=0;
	 	expre=expr(ast.expr, ctx, true);
	}
	// console.log(JSON.stringify(ast));
	// console.log("-----------------------------");
	// console.log(JSON.stringify(expre));
	if(block_stmts.length > 0){
		if(typeof ast.qid != 'undefined'){
			if(typeof ast.dim != 'undefined'){
				block_stmts.push({kind: "assign", id: ast.qid[0], expr: expre, dim: ast.dim});
			}
			else{
				block_stmts.push({kind: "assign", id: ast.qid[0], expr: expre});		
				// console.log({kind: "assign", id: ast.qid[0], expr: expre, dim: ast.dim});
			}
		}
		else if(typeof ast.id != 'undefined'){
			var assign_stmt = JSON.parse(JSON.stringify(ast));
			assign_stmt.expr=expre;
			block_stmts.push(assign_stmt);
		}
	}
	return orig;
}

function is_varconst(ast){
	if(typeof ast.id != 'undefined' || typeof ast.qid != 'undefined' || typeof ast.is_const != 'undefined')
		return true;
	return false;
}

function is_dim_resolved(ast,ctx){
	var dim = 0;
	// console.log("calling is dim resolved for ", ast);
	// console.log(ast.id);
	if(typeof ast.dim != 'undefined'){
		dim=ast.dim.dim.length;
	}
	if(typeof ast.id === 'undefined'){
		if(typeof ctx.symtbl.lookup(ast.qid[0]).info.type.dim != 'undefined'){
			if(ctx.symtbl.lookup(ast.qid[0]).info.type.dim.dim.length > dim){
				// console.log("returning false from is_dim_resolved");
				return false;
			}
		}
	}
	else if(typeof ctx.symtbl.lookup(ast.id).info.type.dim != 'undefined'){
		if(ctx.symtbl.lookup(ast.id).info.type.dim.dim.length > dim)
			return false;
	}
	return true;
}

function get_dim(ast,ctx){
	var Left;
	var Right;
	// console.log(ast);
	// console.log(astlib.resolve_matrix_expr(ast.lexpr,ctx.symtbl).dim);
	if(typeof ast.id != 'undefined'){
		Left= astlib.resolve_matrix_expr(ast,ctx.symtbl);
		// console.log("******************");
		// conosle.log(Left);
		return {dim: Left.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.id).info)};
	}
	else if(ast.op == "+" || ast.op == "-"){
		if(typeof ast.lexpr.id != 'undefined'){
			// console.log(Left);
			Left = astlib.resolve_matrix_expr(ast.lexpr,ctx.symtbl);
			return {dim : Left.dim, info: ctx.symtbl.lookup(ast.lexpr.id).info};
		}
		else{
			Left = astlib.resolve_matrix_expr(ast.lexpr,ctx.symtbl);
		// console.log(Left, Right);
			// console.log(Left.dim);
			return {dim: Left.dim , info: ctx.symtbl.lookup(ast.lexpr.qid[0]).info};
		}
	}
	else if(ast.op == "*"){
		Left = astlib.resolve_matrix_expr(ast.lexpr,ctx.symtbl);
		Right = astlib.resolve_matrix_expr(ast.rexpr,ctx.symtbl);
		if(!Left && !Right){
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: [], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
			else 
				return {dim: [], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.qid[0]).info)};
		}
		else if(!Left && (Right.dim.length == 1 || Right.dim.length == 2)){
			if(typeof ast.rexpr.id != 'undefined')
				return {dim: Right.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.rexpr.id).info)};
			else
				return {dim: Right.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.rexpr.qid[0]).info)};
		}
		else if((Left.dim.length == 1 || Left.dim.length == 2) && !Right){
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: Left.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
			else if(typeof ast.lexpr.qid != 'undefined')
				return {dim: Left.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.qid[0]).info)};			
		}
		else if(Left.dim.length == 1 && Right.dim.length == 2){
			if(typeof ast.lexpr.id != 'undefined'){
				return {dim: [Right.dim[1]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
			}
			else if(typeof ast.lexpr.qid != 'undefined'){
				return {dim: [Right.dim[1]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.qid[0]).info)};
			}
		}
		else if(Left.dim.length == 2 && Right.dim.length == 1){
			if(typeof ast.rexpr.id != 'undefined'){
				return {dim: [Left.dim[0]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.rexpr.id).info)};
			}
			else if(typeof ast.rexpr.qid != 'undefined'){
				return {dim: [Left.dim[0]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.rexpr.qid[0]).info)};
			}	
		}
		else if(Left.dim.length == 2 && Right.dim.length == 2){
		// console.log("******************************");
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: [Left.dim[0], Right.dim[1]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
			else if(typeof ast.lexpr.qid != 'undefined')
				return {dim: [Left.dim[0], Right.dim[1]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.qid[0]).info)};
		}
		else if(Left.dim.length == 1 && Right.dim.length == 1){
		// console.log(Right);
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: [], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
			else if(typeof ast.lexpr.qid != 'undefined')
				return {dim: [], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.qid[0]).info)};
		}
	}
}

function transform_expr(ast, ctx){
	var details = get_dim(ast, ctx);
	// console.log(details);
	details.info.type.dim.dim = astlib.deep_copy(details.dim);
	details.info.is_temp=true;
	// console.log((ast));
	// console.log(details.info.dim);
	// delete details.info.type.dim;
	block_stmts.push({kind: "assign",id : "__t"+temp_ind,expr: astlib.deep_copy(ast)});
	ctx.symtbl.addSymbolToCurrentScope("__t"+temp_ind , details.info);
	// console.log(details.info.type.dim);
	return {id : "__t"+temp_ind++};
}

function expr(ast, ctx, isRoot){
	// console.log(JSON.stringify(ast));
	// if(typeof ast.op != 'undefined'){
		var lexpr_is_varconst = is_varconst(ast.lexpr);
		var rexpr_is_varconst = is_varconst(ast.rexpr);
		// console.log(lexpr_is_varconst , rexpr_is_varconst);
	// }
	if(lexpr_is_varconst && rexpr_is_varconst){
		if(isRoot || (is_dim_resolved(ast.lexpr,ctx) && is_dim_resolved(ast.rexpr, ctx)))
		{
			if(isRoot && ast.op=='*')
			{
				return transform_expr(ast,ctx);
			}
			return ast;
		}
		else{
			// console.log("isRoot");
			change=1;
			return transform_expr(ast,ctx);
		}
	}
	else{
		if(!lexpr_is_varconst){
			var texpr = expr(ast.lexpr, ctx, false);
			if(texpr){
				ast.lexpr = texpr;
			}
		}
		if(!rexpr_is_varconst){
			var texpr = expr(ast.rexpr, ctx, false);
			if(texpr){
				// console.log(texpr);
				ast.rexpr = texpr;
			}
		}
	}
	return ast;

}

var astlib=require("./../ast_util.js");
var temp_ind=0;
var block_stmts=[];
exports.transform=transform;