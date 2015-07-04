var Graph = require('../graph');
var Tree = require('../tree');
var Vertex = require('../vertex');


function initialize(graph){
	var arr = [new Vertex('A'),new Vertex('B'),new Vertex('C'),new Vertex('D'),new Vertex('E'),new Vertex('F')];
	arr[0].addAdjacent([arr[1],arr[4]]);
	arr[1].addAdjacent([arr[0],arr[2],arr[3],arr[5]]);
	arr[2].addAdjacent([arr[1],arr[5]]);
	arr[3].addAdjacent([arr[1]]);
	arr[4].addAdjacent([arr[0],arr[2]]);
	arr[5].addAdjacent([arr[1],arr[2]]);
	var s = Math.floor(Math.random()*5);
	arr.forEach(function(elm,index){
		if(s == index){
			elm.distance = 0;
			elm.state = 1;
		}
		graph.addVertex(elm);
	})
	return graph;
}

function largura(graph,tree){
	// Inicializa o grafo
	graph = initialize(graph);
	// Pega o vértice do Grafo que tem distância zero
	var vertex = graph.getFirst();
	//  Adiciona o vértice na árvore(Que contém uma fila).
	tree.addFirst(vertex);
	// Enquanto a fila não for vazia.
	while(tree.getSize() != 0){
		// Remove o primeiro vértice da fila
		var auxVertex = tree.removeFirst();
		console.log(auxVertex.identifier);
		// Para cada aresta do vértice que foi removido
		auxVertex.edges.forEach(function(elm){
			console.log('\t',elm.identifier,elm.distance)
			if(elm.state == 0){
				// Pinta de cinza e adiciona como predecessor o vértice anterior, e soma a distância.
				elm.state = 1;
				elm.distance = auxVertex.distance + 1;
				elm.predecessor = auxVertex;
				tree.addFirst(elm);
			}
		})
		// Após ter pintado de cinza todos seus adjacentes, pinta-o de preto.
		auxVertex.state = 2;
	}
	// Função utilizada para printar de um elemento aleatório até a raiz da árvore
	generateToFirst(graph.getRandom());
}

function generateToFirst(obj){
	console.log(obj.identifier, obj.distance);
	if(obj.predecessor != null){
		generateToFirst(obj.predecessor);
	}
}

largura(new Graph(), new Tree());



