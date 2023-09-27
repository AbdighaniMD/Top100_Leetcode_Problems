/**
 * 20 leetcode easy. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let stack = [];
    let pairsHashMap = {"(": ")", "{": "}", "[": "]"}
    let n = s.length;
    let i = 0 ;
    while (i < n){
        let current = s[i];
        if(pairsHashMap[current]) {
           // stack.push(current);
           console.log(stack.push(current))
        }else if (pairsHashMap[stack.pop()] !== current){
            return false;
        }
        i++
        console.log(stack)
    }

    return stack.length === 0;
}


let  s = "({({})})"

console.log(isValid(s));