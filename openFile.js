function returnGraph(){
	var fs = require('fs')
	, 	endOfLine = require('os').EOL;
	return function(filename){
		var Graph = require('./Models/Graph')
		,	Vertex = require('./Models/Vertex')
		,	rawFileContent = fs.readFileSync(filename, {encoding: 'utf-8'})
		,	fileContent = rawFileContent.split(endOfLine)
		,	indexToBreak = fileContent.indexOf('#')
		,	listOfAdjacency
		,	matrixOfAdjacency
		,	edgesFromGraph = []
		,	fromVertex
		,	toVertex;
		function mountListOfAdjacency(vertex){
			var aux = vertex.split(' ');
			return (new Vertex(aux[0],aux[1]));
		}

		// Como javascript não possui vetores de tamanho fixo,
		// é necessário colocar o tamanho do vetor direto
		// no atributo length.
		function mountMatrixOfAdjacency(size){
			var matrix = [];
			matrix.length = size;
			for (var i = 0; i < matrix.length; i++){
				var arr_ = [];
				arr_.length = size;
				matrix[i] = arr_;
			}
			return matrix;
		}

		function finishListAndMatrix(edges){
			fromVertex = parseInt(edges.split(' ')[0]);
			toVertex = parseInt(edges.split(' ')[1]);
			var weight = parseInt(edges.split(' ')[2]) || 0;
			if(!(isNaN(fromVertex) || isNaN(toVertex))){
				edgesFromGraph.push({from: listOfAdjacency[fromVertex -1],weight: weight, to: listOfAdjacency[toVertex-1]});
				matrixOfAdjacency[fromVertex-1][toVertex-1] = 1;
				listOfAdjacency[fromVertex -1].edges.push(listOfAdjacency[toVertex-1]);
			}
		}

		// Começa a montar a lista de adjacência inserindo todos os vértices em uma lista.
		listOfAdjacency = fileContent.splice(0, indexToBreak).map(mountListOfAdjacency);
		// Começa a criar a matriz de adjacência com tamanho |V|.
		
		matrixOfAdjacency = mountMatrixOfAdjacency(listOfAdjacency.length);
		// Pega todas as arestas que estão após o #.
		edges = fileContent.splice(1, fileContent.length -1);
		// Termina de montar a lista de adjacência e a matriz inserindo as arestas.
		edges.forEach(finishListAndMatrix);
		// Retorna o grafo.
		return new Graph(listOfAdjacency,matrixOfAdjacency,edgesFromGraph);	
	}
}
module.exports = returnGraph;
