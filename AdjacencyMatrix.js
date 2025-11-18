// Graph Representation in JavaScript (Adjacency Matrix)

class Graph {
  // Initialize the graph with a specific number of vertices
  constructor(numVertices) {
    this.numVertices = numVertices;

    // Create a V x V matrix and initialize all entries to 0
    this.adjMatrix = this.initializeMatrix(numVertices);
  }

  // Helper function to create and initialize the 2D array
  initializeMatrix(numVertices) {
    let matrix = [];

    for (let i = 0; i < numVertices; i++) {
      matrix[i] = []; // create a new inner array

      for (let j = 0; j < numVertices; j++) {
        matrix[i][j] = 0; // set initial value to 0 (no edge)
      }
    }

    return matrix;
  }

  // Add an edge between vertex u and v
  addEdge(u, v, weight = 1, directed = false) {
    if (
      u >= 0 &&
      u < this.numVertices &&
      v >= 0 &&
      v < this.numVertices
    ) {
      // set the value for the edge from u to v
      this.adjMatrix[u][v] = weight;

      // If undirected, add the reverse edge (v → u)
      if (!directed) {
        this.adjMatrix[v][u] = weight;
      }
    } else {
      console.log("Error: Vertex out of range");
    }
  }

  // Print the adjacency matrix
  printMatrix() {
    for (let i = 0; i < this.numVertices; i++) {
      console.log(this.adjMatrix[i].join(" "));
    }
  }
}

// Create an undirected graph with 4 vertices (0, 1, 2, 3)
const g = new Graph(4);

// Add edges (0,1), (0,2), (1,2), (1,3)
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(1, 3);

console.log("Adjacency Matrix:");
g.printMatrix();