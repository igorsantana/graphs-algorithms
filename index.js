var openFile = require('./openFile')
,	graph = openFile()('./anotherGraph.tgf')
,	largura = require('./Largura/largura')
,	profundidade = require('./Profundidade/profundidade')
,	transposto = require('./Conexo/transposto')
,	conexo = require('./Conexo/conexo')
,	bellmanFord = require('./CaminhosMinimos/bellmanFord');

bellmanFord(graph);
// console.info(graph.getEdges());