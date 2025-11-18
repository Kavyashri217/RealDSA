import numpy as np

def create_adjacency_matrix_numpy(num_vertices, edges, directed=False):
    # Initialize a V x V numpy array with zeros
    adj_matrix = np.zeros((num_vertices, num_vertices), dtype=int)

    # Populate the matrix with edges
    for u, v in edges:
        if 0 <= u < num_vertices and 0 <= v < num_vertices:
            adj_matrix[u][v] = 1
            if not directed:
                adj_matrix[v][u] = 1
        else:
            print(f"Edge ({u}, {v}) out of range.")
            return None

    return adj_matrix


# Example usage:
num_v = 4
graph_edges = [(0, 1), (0, 2), (1, 2), (1, 3)]

adj_mat_np = create_adjacency_matrix_numpy(num_v, graph_edges)

if adj_mat_np is not None:
    print("Adjacency matrix (NumPy):")
    print(adj_mat_np)
