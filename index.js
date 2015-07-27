var openFile = require('./openFile')
,	graph = openFile()('./graphLow.tgf')
,	largura = require('./Largura/largura')
,	profundidade = require('./Profundidade/profundidade')
,	transposto = require('./Conexo/transposto')
,	conexo = require('./Conexo/conexo')
,	bellmanFord = require('./CaminhosMinimos/bellmanFord')
,	dijkstra = require('./CaminhosMinimos/dijkstra')
,	floydWarshall = require('./CaminhosMinimos/floydWarshall')
,	ttl = require('./Maratona/ttl');


console.info(bellmanFord(graph,0));
// console.info(graph.getFormattedAdjacencyList('bellman-ford'));
