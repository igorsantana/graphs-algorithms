function Queue(){
	this.queue = [];
	this.add = function(value){
		this.queue.push(value);
	}
	this.remove = function(){
		return this.queue.shift();
	}
	this.getLength = function(){
		return this.queue.length;
	}
	this.hasVertexToRemove = function(){
		if(this.queue.length > 0){
			return true;
		}
		return false;
	}
};
module.exports = Queue;