class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => {
      return vertex !== vertex2
    })

    this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter((vertex) => {
      return vertex !== vertex1
    })
  }

  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      return false
    }

    while(this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacencyVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstSearchRecursive(startVertex) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList; // Semi-colon is request to make engine identify adjacencyList is object not function

    (function dfs(vertex) {
      if (!vertex) {
        return null
      }

      visited[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach(element => {
        if (!visited[element]) {
          return dfs(element)
        }
      })

    })(startVertex)

    return result
  }

  depthFirstSearchIterative(startVertex) {
    const result = []
    const visited = {}
    const stack = [startVertex]
    let currentVertex;

    visited[startVertex] = true

    while(stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(element => {
        if (!visited[element]) {
          visited[element] = true
          stack.push(element)
        } 
      })
    }

    return result
  }
  
  breadthFirstSearch(startVertex) {
    const result = []
    const visited = {}
    const queue = [startVertex]
    let currentVertex;

    while(queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(element => {
        if (!visited[element]) {
          visited[element] = true
          queue.push(element)
        }
      })
    }

    return result
  }
}

module.exports = {
  Graph
}