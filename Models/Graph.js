var Graph = function(list,matrix){
	this.listOfAdjacency = list;
	this.matrixOfAdjacency = matrix;
	this.getAdjacencyList = function(){
		return this.listOfAdjacency;
	}
	this.getAdjacencyMatrix = function(){
		return this.matrixOfAdjacency;
	}
};
module.exports = Graph;