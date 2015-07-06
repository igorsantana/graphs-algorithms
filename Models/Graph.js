var Graph = function(list,matrix){
	this.list = list;
	this.matrix = matrix;
};

Graph.prototype.getAdjacencyList = function(){
	return this.listOfAdjacency;
}
Graph.prototype.getAdjacencyMatrix = function(){
	return this.matrixOfAdjacency;
}
module.exports = Graph;