/* Given a non-empty string, write a function that returns the minimum number of cuts needed to perform on the string such that each remaining substring is a palindrome.
A palindrome is defined as a string that's written the same forward as backward. Note that single-character strings are palindromes. */

//Solution 1
//Approach: DP
//Time: O(n^3) | Space: O(n^2)
const palindromePartitioningMinCuts = string => {
    const palindromes = buildPalindromes(string);
    const cuts = buildCuts(string, palindromes);
    return cuts[cuts.length -1];
}

const isPalindrome = string => {
    let left = 0,
        right = string.length -1;
    while (left < right) {
        if (string[left] !== string[right]) return false;
        left++;
        right--;
    }
    return true;
}

const buildPalindromes = string => {
    let len = string.length;
    const palindromes = Array(len)
    .fill(0)
    .map(el => [].fill(false));
    for (let i = 0; i < len; i++) {
        palindromes[i][i] = true;
        for (let j = i; j < len; j++) {
            palindromes[i][j] = isPalindrome(string.slice(i, j + 1)) 
        }
    }
    return palindromes;
}

const buildCuts = (string, palindromes) => {
    const cuts = Array(string.length).fill(Infinity);
    for (let i = 0; i < string.length; i++) {
        if (palindromes[0][i]) {
            cuts[i] = 0
        } else {
            cuts[i] = cuts[i - 1] + 1;
            for (let j = 1; j < i; j++) {
                if (palindromes[j][i] && cuts[j - 1] + 1 < cuts[i]) {
                    cuts[i] = cuts[j - 1] + 1;
                }
            }
        }
    }
    return cuts;
}

//Solution 2
//Approach: DP
//Time: O(n^2) | Space: O(n^2)
const palindromePartitioningMinCuts1 = string => {
    const palindromes = buildPalindromes(string);
    const cuts = buildCuts(string, palindromes);
    return cuts[cuts.length - 1];
}

const buildPalindromes1 = string => {
  let len = string.length;
  const palindromes = Array(len).fill(0).map(el => Array(len).fill(false));
  for (let i = 0; i < len; i++) {
    palindromes[i][i] = true;
  }
  for (let length = 2; length < len + 1; length++) {
    for (let i = 0; i < len - length + 1; i++) {
      j = i + length - 1;
      if (length === 2) {
        palindromes[i][j] = string[i] === string[j]; 
      } else {
        palindromes[i][j] = string[i] === string[j] && palindromes[i + 1][j - 1];
      }
    }
  }
  return palindromes;
}

const buildCuts1 = (string, palindromes) => {
    const cuts = Array(string.length).fill(Infinity);
    for (let i = 0; i < string.length; i++) {
        if (palindromes[0][i]) {
            cuts[i] = 0
        } else {
            cuts[i] = cuts[i - 1] + 1;
            for (let j = 1; j < i; j++) {
                if (palindromes[j][i] && cuts[j - 1] + 1 < cuts[i]) {
                    cuts[i] = cuts[j - 1] + 1;
                }
            }
        }
    }
    return cuts;
}