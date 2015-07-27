var openFile = require('./openFile')
,	graph = openFile()('./graphxs.tgf')
,	largura = require('./Largura/largura')
,	profundidade = require('./Profundidade/profundidade')
,	transposto = require('./Conexo/transposto')
,	conexo = require('./Conexo/conexo')
,	bellmanFord = require('./CaminhosMinimos/bellmanFord')
,	dijkstra = require('./CaminhosMinimos/dijkstra')
,	floydWarshall = require('./CaminhosMinimos/floydWarshall')
,	ttl = require('./Maratona/ttl');


console.log(profundidade(graph,true));
// console.info(graph.getEdges());