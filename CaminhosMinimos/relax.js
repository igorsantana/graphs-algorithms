function relax(u,vertex){
	var v = vertex.vertex
	,w = vertex.weight;
	if(v.distance > (u.distance + w)){
		v.distance = u.distance + w;
		v.pred = u;
		// console.log(v.distance)
	}
}


module.exports = relax