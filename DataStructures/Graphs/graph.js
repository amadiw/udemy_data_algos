class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex])
    this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }
  removeVertex(vertex){
    //should loop as long as there are vertices in adjacency list for that vertex
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
  DFSrecurs(start){
    const result = []
    const visited ={}

    const helper = start => {
      if(!start) return undefined

      visited[start] = true
      result.push(start)
      this.adjacencyList[start].forEach(neighbor => {
        if(!visited[neighbor]) {
          return helper(neighbor)
        }
      })
    }
    helper(start)
    return result
  }
}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g)
console.log(g.DFSrecurs("A"))
