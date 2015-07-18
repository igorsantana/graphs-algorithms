function Vertex(value,label){
	this.value = value;
	this.label = label;
	this.edges = [];
	this.state = 'white';
	this.distance = -1;
	this.pred = null;
	this.startingTime = Infinity;
	this.endingTime = Infinity;
	this.hasAdjacent = function(){return this.edges.length > 0};
	this.addAdjacent = function(adjacent){
		if(adjacent){
			this.edges.push(adjacent);
			return true;
		}
		return false;
	}
}

// Exporta o objeto Vertex para que possa ser usado em outros arquivos.
module.exports = Vertex;