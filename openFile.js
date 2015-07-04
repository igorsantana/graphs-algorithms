var fs = require('fs'),	endOfLine = require('os').EOL,tgf,_break,listOfAdjacency= [];
fs.readFile('./graph.tgf',{encoding: 'utf-8'},function(err,data){
	if(err) throw err;
	readData(data)
});
function readData(file){
	var index,indexToBreak,edges = [];
	// Quebra arquivo .tgf por linha
	tgf = file.split(endOfLine);
	// Pega o index do divisor de vértices # arestas
	for(var i = 0, len = tgf.length;i < len; i++) if(tgf[i].indexOf('#') != -1){
		indexToBreak = i;
		break;
	};
	// Cria a lista de adjacência com o array de vértices inicializados com 0 vértices.
	listOfAdjacency = tgf.splice(0,indexToBreak).map(function(vertex){
		var aux = vertex.split(' ');
		return {value: aux[0],label: aux[1],edges: []}
	});
	// Criar o array com os elementos depois do #
	edges = tgf.splice(1, tgf.length -1);
	var from, to;
	// Adiciona os vértices dentro da lista de vértices dos itens na lista de adjacências
	edges.forEach(function(value){
		from = parseInt(value.split(' ')[0]);
		to = parseInt(value.split(' ')[1]);
		listOfAdjacency[from-1].edges.push(listOfAdjacency[to-1].value)
	})
	
	console.log(listOfAdjacency);
}