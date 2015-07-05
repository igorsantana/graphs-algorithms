var fs = require('fs'), endOfLine = require('os').EOL;

module.exports = function(filename){
	var fileContent = fs.readFileSync(filename, {encoding: 'utf-8'})
	,	rawFileContent = fileContent.split(endOfLine)
	,	indexToBreak = rawFileContent.indexOf('#')
	,	listOfAdjacency
	,	edges
	,	from
	,	to;
	function mountListOfAdjacency(vertex){
		var aux = vertex.split(' ');
		return {value: aux[0],label: aux[1],edges: []};
	}
	function finishListOfAdjacency(edges){
		from = parseInt(edges.split(' ')[0]);
		to = parseInt(edges.split(' ')[1]);
		if(!(isNaN(from) || isNaN(to))){
			listOfAdjacency[from -1].edges.push(listOfAdjacency[to-1].value);
		}
	}
	listOfAdjacency = rawFileContent.splice(0, indexToBreak).map(mountListOfAdjacency);
	edges = rawFileContent.splice(1, rawFileContent.length -1);
	edges.forEach(finishListOfAdjacency);
	return listOfAdjacency;
}
