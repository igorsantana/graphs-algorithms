var openFile = require('./openFile')
,	graph = openFile()('./anotherGraph.tgf')
,	largura = require('./Largura/largura')
,	profundidade = require('./Profundidade/profundidade')
,	transposto = require('./Conexo/transposto')
,	conexo = require('./Conexo/conexo')
,	bellmanFord = require('./CaminhosMinimos/bellmanFord')
,	dijkstra = require('./CaminhosMinimos/dijkstra')
,	floydWarshall = require('./CaminhosMinimos/floydWarshall')
,	ttl = require('./Maratona/ttl');

console.log(ttl(graph,5,1));
// console.info(graph.getEdges());