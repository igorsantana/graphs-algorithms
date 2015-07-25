var openFile = require('./openFile')
,	graph = openFile()('./anotherGraph.tgf')
,	largura = require('./Largura/largura')
,	profundidade = require('./Profundidade/profundidade')
,	transposto = require('./Conexo/transposto')
,	conexo = require('./Conexo/conexo')
,	bellmanFord = require('./CaminhosMinimos/bellmanFord')
,	dijkstra = require('./CaminhosMinimos/dijkstra');

dijkstra(graph,graph.getAdjacencyList()[1]);
// console.info(graph.getEdges());