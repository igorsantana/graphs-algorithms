function Vertex(identifier){
	this.identifier = identifier;
	this.edges = [];
	this.state = 0;
	this.distance = -1;
	this.predecessor = null;
	this.start = -1;
	this.ending = -1;
}

Vertex.prototype.addAdjacent = function(array){
	var edges = this.edges;
	array.forEach(function(elm){
		edges.push(elm);
	})
}

module.exports = Vertex;