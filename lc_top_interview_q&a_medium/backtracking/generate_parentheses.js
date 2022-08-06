
//Solution 1
//Approach: backtracking, stack
//Time: O(4^n/Math.sqrt(n)) | Space: O(4^n/Math.sqrt(n))
//complexity above is nth Catalan number
const generateParenthesis = (n) => {
    const result = [];
    const stack = [];
    const backtrack = (openCount, closeCount) => {
        if (openCount === closeCount && closeCount === n) {
            let validCombo = stack.join("");
            result.push(validCombo)
        }
        if (openCount < n) {
            stack.push("(");
            backtrack(openCount + 1, closeCount);
            stack.pop();
        }
        if (openCount > closeCount) {
            stack.push(")");
            backtrack(openCount, closeCount + 1);
            stack.pop();
        }
    }
    backtrack(0, 0);
    return result;
};

//Solution 2
//Approach: backtracking
//Time: O(4^n/Math.sqrt(n)) | Space: O(4^n/Math.sqrt(n))
//complexity above is nth Catalan number
const generateParenthesis1 = (n) => {
    const result = [];
    const backtrack = (openCount, closeCount, path) => {
        if (openCount === closeCount && closeCount === n) {
            result.push(path);
            return
        }
        if (openCount < n) {
            backtrack(openCount + 1, closeCount, path + "(");
        }
        if (openCount > closeCount) {
            backtrack(openCount, closeCount + 1, path + ")");
        }
    }
    backtrack(0, 0, "");
    return result;
};