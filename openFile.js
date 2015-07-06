var fs = require('fs'), endOfLine = require('os').EOL, Graph = require('./Models/Graph');
module.exports = function(filename){
	var fileContent = fs.readFileSync(filename, {encoding: 'utf-8'})
	,	rawFileContent = fileContent.split(endOfLine)
	,	indexToBreak = rawFileContent.indexOf('#')
	,	listOfAdjacency
	,	mountMatrixOfAdjacency
	,	edges
	,	from
	,	to;

	function mountListOfAdjacency(vertex){
		var aux = vertex.split(' ');
		return {value: aux[0],label: aux[1],edges: []};
	}

	function mountMatrixOfAdjacency(size){
		var aux = [];
		aux.length = size;
		for (var i = 0; i < aux.length; i++){
			var arr_ = [];
			arr_.length = size;
			aux[i] = arr_;
		}
		return aux;
	}
	function finishListOfAdjacency(edges){
		from = parseInt(edges.split(' ')[0]);
		to = parseInt(edges.split(' ')[1]);
		if(!(isNaN(from) || isNaN(to))){
			matrixOfAdjacency[from-1][to-1] = 1;
			listOfAdjacency[from -1].edges.push(listOfAdjacency[to-1].label);
		}
	}
	listOfAdjacency = rawFileContent.splice(0, indexToBreak).map(mountListOfAdjacency);
	matrixOfAdjacency = mountMatrixOfAdjacency(listOfAdjacency.length);
	edges = rawFileContent.splice(1, rawFileContent.length -1);
	edges.forEach(finishListOfAdjacency);
	return new Graph(listOfAdjacency,matrixOfAdjacency);
}
