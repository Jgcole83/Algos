// COMBINED GRAPH IMPLEMENTATION

// Edge class
class Edge {
    constructor(destination, weight = null) {
      this.destination = destination;
      this.weight = weight;
    }
  }
  
  // Vertex class
  class Vertex {
    constructor(data) {
      this.data = data;
      this.edges = [];
    }
  
    addEdge(vertex, weight) {
      this.edges.push(new Edge(vertex, weight));
    }
  
    removeEdge(vertex) {
      this.edges = this.edges.filter(edge => edge.destination !== vertex);
    }
  
    print() {
      const edgeList = this.edges.map(edge =>
        edge.weight !== null
          ? `${edge.destination.data} (${edge.weight})`
          : edge.destination.data
      );
  
      console.log(`${this.data} --> ${edgeList.join(', ')}`);
    }
  }
  
  // Graph class
  class Graph {
    constructor(isWeighted = false, isDirected = false) {
      this.vertices = [];
      this.isWeighted = isWeighted;
      this.isDirected = isDirected;
    }
  
    addVertex(data) {
      const newVertex = new Vertex(data);
      this.vertices.push(newVertex);
      return newVertex;
    }
  
    removeVertex(vertex) {
      this.vertices = this.vertices.filter(v => v !== vertex);
      this.vertices.forEach(v => v.removeEdge(vertex));
    }
  
    addEdge(vertexOne, vertexTwo, weight) {
      const edgeWeight = this.isWeighted ? weight : null;
  
      vertexOne.addEdge(vertexTwo, edgeWeight);
  
      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
    }
  
    removeEdge(vertexOne, vertexTwo) {
      vertexOne.removeEdge(vertexTwo);
  
      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    }
  
    print() {
      this.vertices.forEach(vertex => vertex.print());
    }
  }
  
  // SAMPLE TESTING
  
  const airlineRoutes = new Graph(true, false);
  
  const sf = airlineRoutes.addVertex('San Francisco');
  const la = airlineRoutes.addVertex('Los Angeles');
  const ny = airlineRoutes.addVertex('New York');
  const denver = airlineRoutes.addVertex('Denver');
  const calgary = airlineRoutes.addVertex('Calgary');
  const atlanta = airlineRoutes.addVertex('Atlanta');
  
  // Add routes
  airlineRoutes.addEdge(sf, la, 400);
  airlineRoutes.addEdge(ny, denver, 1800);
  airlineRoutes.addEdge(calgary, denver, 1000);
  airlineRoutes.addEdge(la, atlanta, 2100);
  
  // Print before changes
  console.log('\n-- ROUTES BEFORE REMOVALS --');
  airlineRoutes.print();
  
  // Remove broken routes
  airlineRoutes.removeEdge(ny, denver); // Snowstorm in NY
  airlineRoutes.removeVertex(calgary);  // Calgary is fully out
  
  // Print after changes
  console.log('\n-- ROUTES AFTER REMOVALS --');
  airlineRoutes.print();
  