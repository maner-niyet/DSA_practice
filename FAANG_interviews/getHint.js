var getHint = function(secret, guess) {
    const digitsInSecret = {};
    let bullCount = 0, cowCount = 0;
    for (let char of secret) {
        if (digitsInSecret.hasOwnProperty(char)) {
            digitsInSecret[char]++
        } else {
            digitsInSecret[char] = 1;
        }
    }
    const visited = {};
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            bullCount++;
            digitsInSecret[guess[i]] === 1 ? delete digitsInSecret[guess[i]] : digitsInSecret[guess[i]]--;
            visited[i] = true;
        } 
    }
    
    for (let i = 0; i < guess.length; i++) {
        if (digitsInSecret.hasOwnProperty(guess[i]) && !visited[i]) {
            cowCount++
            digitsInSecret[guess[i]] === 1 ? delete digitsInSecret[guess[i]]  : digitsInSecret[guess[i]]--;
        }
    }
    return `${bullCount}A${cowCount}B`
};