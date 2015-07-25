var Graph = function(list,matrix,edges){
	this.listOfAdjacency = list;
	this.edges = edges;
	this.matrixOfAdjacency = matrix;
	this.getEdges = function(){
		return this.edges;
	}
	this.getAdjacencyList = function(){
		return this.listOfAdjacency;
	}
	this.getAdjacencyMatrix = function(){
		return this.matrixOfAdjacency;
	}

};
module.exports = Graph;



	
