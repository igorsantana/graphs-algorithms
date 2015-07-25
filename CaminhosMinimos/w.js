function w(u,v){
	var toReturn = u.edges.filter(function(data){
		return data.vertex.value == v.value;
	})
	if(toReturn.length == 1){
		return toReturn[0].weight;
	}
	return Infinity;
}

module.exports = w