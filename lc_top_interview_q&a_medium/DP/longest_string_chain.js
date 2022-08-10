const longestStringChain = strings => {
    strings.sort((a, b) => a.length - b.length); 
    const map = buildMap(strings);
    const len = strings.length;
    for (let i = 1; i < len; i++) {
      let word = strings[i];
      for (let j = 0; j < word.length; j++) {
        let newWord = word.substring(0, j) + word.substring(j + 1);
        if (!(newWord in map)) continue;
        if (map[word][1] < map[newWord][1] + 1) {
          map[word][1] = map[newWord][1] + 1;
          map[word][0] = newWord;
        }
      }
    }  
    return buildChain(map);
}
  
const buildMap = strings => {
    const map = {};
    for (const string of strings) {
      map[string] = ["", 1]
    }
    return map;
 }
  
 const buildChain = (map) => {
    let maxLength = -Infinity;
    let beginningOfChain = "";
    const chain = [];
    for (const key in map) {
      if (map[key][1] > maxLength) {
        maxLength = map[key][1];
        beginningOfChain = key;
      }
    }
    while (beginningOfChain !== "") {
      chain.push(beginningOfChain);
      beginningOfChain = map[beginningOfChain][0];
    }
    return chain.length === 1 ? [] : chain;
 }