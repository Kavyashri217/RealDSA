from collections import defaultdict

class Graph:
    def __init__(self):
        # The graph is a dictionary where keys are vertices
        # and values are lists of adjacent vertices
        self.adj_list = defaultdict(list)

    # Add a vertex to the graph
    def add_vertex(self, v):
        if v not in self.adj_list:
            self.adj_list[v] = []
        else:
            print(f"Vertex {v} already exists.")

    # Add an edge between u and v
    def add_edge(self, u, v, directed=False):
        # Add v to u's list
        if v not in self.adj_list[u]:
            self.adj_list[u].append(v)

        # If undirected, add reverse edge (v to u)
        if not directed:
            if u not in self.adj_list[v]:
                self.adj_list[v].append(u)

    # Print the adjacency list
    def print_graph(self):
        for vertex, neighbors in self.adj_list.items():
            print(f"{vertex} -> {', '.join(map(str, neighbors))}")

# Create an undirected graph
g = Graph()

# Add vertices 0, 1, 2, 3
g.add_vertex(0)
g.add_vertex(1)
g.add_vertex(2)
g.add_vertex(3)

# Add edges (0,1), (0,2), (1,2), (1,3)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(1, 3)

print("Adjacency List:")
g.print_graph()