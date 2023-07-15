function foo(input) {
    const graph = {};
    for (const str of input) {
      const [source, destination] = str.split(">");
      graph[source] = destination;
    }
    
    let result = "";
    let current = Object.keys(graph).find(char => !Object.values(graph).includes(char));;
    
    while (graph[current]) {
      result += current;
      const next = graph[current];
      delete graph[current];
      current = next;
    }
    
    result += current;
    
    return result;
  }
  
  const input = ["R>A","F>R","A>N","C>E","N>C"];
  const output = foo(input);
  console.log(output);
  