//https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/

var queryString = function(s, n) {
    for (let i = 0; i <= n; i++) {
        let binary = convertToBinary(i);
        if (s.includes(binary)) {
            continue
        } else {
            return false
        }
    }
    return true
};

function convertToBinary(n) {
  let binary = ""
  while (n > 0) {
    if (n % 2 === 1) {
        binary = "1" + binary
    } else {
        binary = "0" + binary
    }
    n = parseInt(n / 2)
  }
    return binary;
}