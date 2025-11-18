class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(u, v, directed = false) {
    if (!this.adjList.has(u)) this.addVertex(u);
    if (!this.adjList.has(v)) this.addVertex(v);

    // avoid duplicate edges
    if (!this.adjList.get(u).includes(v)) this.adjList.get(u).push(v);
    if (!directed && !this.adjList.get(v).includes(u)) {
      this.adjList.get(v).push(u);
    }
  }

  printGraph() {
    let lines = [];
    for (const [vertex, neighbors] of this.adjList.entries()) {
      const neighborStr = neighbors.length ? neighbors.join(", ") : "(no neighbors)";
      const line = `${vertex} -> ${neighborStr}`;
      lines.push(line);
      console.log(line);
    }
    return lines.join("\n");
  }
}

// Example Usage
const g = new Graph();

g.addVertex(0);
g.addVertex(1);
g.addEdge(0, 1);

console.log("Adjacency List:");
g.printGraph();
