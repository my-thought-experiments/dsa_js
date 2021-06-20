const { Graph } = require('../graph')

describe('Graph', () => {
  test('should initialize graph', () => {
    let graph = new Graph()
    expect(graph.adjacencyList).toMatchObject({})
  })

  test('should add vertex to graph', () => {
    let graph = new Graph()
    
    graph.addVertex('India')
    let initVertex = graph.adjacencyList['India']
    expect(initVertex.length).toBe(0)
    expect(graph.addVertex('India')).toBeUndefined()

    graph.addVertex('Malaysia')
    graph.addVertex('Singapore')
    graph.addVertex('Thailand')
    graph.addVertex('Vietnam')
    graph.addVertex('Combodia')
    initVertex = graph.adjacencyList['Vietnam']
    expect(initVertex.length).toBe(0)
  })

  test('should add edges to vertex in graph', () => {
    let graph = new Graph()
    
    graph.addVertex('India')
    graph.addVertex('Malaysia')
    graph.addVertex('Singapore')
    graph.addVertex('Thailand')
    graph.addVertex('Vietnam')
    graph.addVertex('Combodia')
    
    graph.addEdge('India', 'Malaysia')
    let initVertex = graph.adjacencyList['India']
    expect(initVertex.length).toBe(1)

    graph.addEdge('India', 'Singapore')
    graph.addEdge('India', 'Thailand')
    initVertex = graph.adjacencyList['India']
    expect(initVertex.length).toBe(3)

    graph.addEdge('Malaysia', 'Vietnam')
    graph.addEdge('Singapore', 'Vietnam')
    graph.addEdge('Malaysia', 'Combodia')
    graph.addEdge('Singapore', 'Combodia')
    graph.addEdge('Vietnam', 'Combodia')

    expect(graph.adjacencyList['India']).toEqual(expect.arrayContaining(['Malaysia', 'Singapore', 'Thailand']))
    expect(graph.adjacencyList['Singapore']).toEqual(expect.arrayContaining(['Vietnam', 'Combodia']))
    expect(graph.adjacencyList['Singapore']).toEqual(expect.not.arrayContaining(['Malaysia']))
  })

  test('should remove edges from vertex in graph', () => {
    let graph = new Graph()
    
    graph.addVertex('India')
    graph.addVertex('Malaysia')
    graph.addVertex('Singapore')
    graph.addVertex('Thailand')
    graph.addVertex('Vietnam')
    graph.addVertex('Combodia')
    
    graph.addEdge('India', 'Malaysia')
    graph.addEdge('India', 'Singapore')
    graph.addEdge('India', 'Thailand')
    graph.addEdge('Malaysia', 'Vietnam')
    graph.addEdge('Singapore', 'Vietnam')
    graph.addEdge('Malaysia', 'Combodia')
    graph.addEdge('Singapore', 'Combodia')
    graph.addEdge('Vietnam', 'Combodia')

    expect(graph.adjacencyList['Malaysia']).toEqual(expect.arrayContaining(['Vietnam', 'Combodia']))
    graph.removeEdge('Malaysia', 'Vietnam')
    graph.removeEdge('Malaysia', 'Combodia')
    expect(graph.adjacencyList['Malaysia']).toEqual(expect.not.arrayContaining(['Vietnam', 'Combodia']))
  })

  test('should remove vertex from graph', () => {
    let graph = new Graph()
    
    graph.addVertex('India')
    graph.addVertex('Malaysia')
    graph.addVertex('Singapore')
    graph.addVertex('Thailand')
    graph.addVertex('Vietnam')
    graph.addVertex('Combodia')
    
    graph.addEdge('India', 'Malaysia')
    graph.addEdge('India', 'Singapore')
    graph.addEdge('India', 'Thailand')
    graph.addEdge('Malaysia', 'Vietnam')
    graph.addEdge('Singapore', 'Vietnam')
    graph.addEdge('Malaysia', 'Combodia')
    graph.addEdge('Singapore', 'Combodia')
    graph.addEdge('Vietnam', 'Combodia')

    expect(graph.removeVertex('Russia')).toBeFalsy()

    initVertex = graph.adjacencyList['India']
    expect(initVertex.length).toBe(3)
    graph.removeVertex('India')
    expect(graph.adjacencyList['India']).toBeUndefined()
    expect(graph.adjacencyList['Malaysia']).toEqual(expect.not.arrayContaining(['India']))
    expect(graph.adjacencyList['Singapore']).toEqual(expect.not.arrayContaining(['India']))
    expect(graph.adjacencyList['Thailand']).toEqual(expect.not.arrayContaining(['India']))
  })

  test('should perform depth first search recursively in graph', () => {
    let graph = new Graph()
    
    graph.addVertex('India')
    graph.addVertex('Malaysia')
    graph.addVertex('Singapore')
    graph.addVertex('Thailand')
    graph.addVertex('Vietnam')
    graph.addVertex('Combodia')
    
    graph.addEdge('India', 'Malaysia')
    graph.addEdge('India', 'Singapore')
    graph.addEdge('India', 'Thailand')
    graph.addEdge('Malaysia', 'Vietnam')
    graph.addEdge('Singapore', 'Vietnam')
    graph.addEdge('Malaysia', 'Combodia')
    graph.addEdge('Singapore', 'Combodia')
    graph.addEdge('Vietnam', 'Combodia')

    expect(graph.depthFirstSearchRecursive("India").length).toBe(6)
    expect(graph.depthFirstSearchRecursive("India")).toEqual(expect.arrayContaining(['India', 'Malaysia', 'Vietnam', 'Singapore', 'Combodia', 'Thailand']))
    expect(graph.depthFirstSearchRecursive("Malaysia")).toEqual(expect.arrayContaining(['Malaysia', 'India', 'Vietnam', 'Singapore', 'Combodia', 'Thailand']))
  })

  test('should perform depth first search iteratively in graph', () => {
    let graph = new Graph()
    
    graph.addVertex('India')
    graph.addVertex('Malaysia')
    graph.addVertex('Singapore')
    graph.addVertex('Thailand')
    graph.addVertex('Vietnam')
    graph.addVertex('Combodia')
    
    graph.addEdge('India', 'Malaysia')
    graph.addEdge('India', 'Singapore')
    graph.addEdge('India', 'Thailand')
    graph.addEdge('Malaysia', 'Vietnam')
    graph.addEdge('Singapore', 'Vietnam')
    graph.addEdge('Malaysia', 'Combodia')
    graph.addEdge('Singapore', 'Combodia')
    graph.addEdge('Vietnam', 'Combodia')

    expect(graph.depthFirstSearchIterative("India").length).toBe(6)
    expect(graph.depthFirstSearchIterative("India")).toEqual(expect.arrayContaining(['India', 'Malaysia', 'Vietnam', 'Singapore', 'Combodia', 'Thailand']))
    expect(graph.depthFirstSearchIterative("Malaysia")).toEqual(expect.arrayContaining(['Malaysia', 'India', 'Vietnam', 'Singapore', 'Combodia', 'Thailand']))
  })

  test('should perform breath first search in graph', () => {
    let graph = new Graph()
    
    graph.addVertex('India')
    graph.addVertex('Malaysia')
    graph.addVertex('Singapore')
    graph.addVertex('Thailand')
    graph.addVertex('Vietnam')
    graph.addVertex('Combodia')
    
    graph.addEdge('India', 'Malaysia')
    graph.addEdge('India', 'Singapore')
    graph.addEdge('India', 'Thailand')
    graph.addEdge('Malaysia', 'Vietnam')
    graph.addEdge('Singapore', 'Vietnam')
    graph.addEdge('Malaysia', 'Combodia')
    graph.addEdge('Singapore', 'Combodia')
    graph.addEdge('Vietnam', 'Combodia')

    expect(graph.breadthFirstSearch("India").length).toBe(7)
    expect(graph.breadthFirstSearch("India")).toEqual(expect.arrayContaining(['India', 'Malaysia', 'Vietnam', 'Singapore', 'Combodia', 'Thailand']))
    expect(graph.breadthFirstSearch("Malaysia")).toEqual(expect.arrayContaining(['Malaysia', 'India', 'Vietnam', 'Singapore', 'Combodia', 'Thailand']))
  })
})
