function relax(u,uAdj){
	var v = uAdj.vertex
	,w = uAdj.weight;
	if(v.distance > (u.distance + w)){
		v.distance = u.distance + w;
		v.pred = u;
	}
}


module.exports = relax