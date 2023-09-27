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
           stack.push(current);
          // console.log(stack.push(current))
        }else if (pairsHashMap[stack.pop()] !== current){
            return false;
        }
        i++
        //console.log(stack)
    }

    return stack.length === 0;
}
//----------------------------------------------------------------------
var isValid2 = function(s) {
    let st = [];
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (ch === '(' || ch === '{' || ch === '[') {
            st.push(ch);
        }
        else {
            if (st.length === 0) {
                return false;
            }
            else {
                let lch = st[st.length - 1];
                if ((lch === '(' && ch === ')') || (lch === '{' && ch === '}') || (lch === '[' && ch === ']')) {
                    st.pop();
                }
                else {
                    return false;
                }   
            }
        }
    }

    if (st.length === 0) {
        return true;
    }
    else {
        return false;
    }
    
};

let  s = "({({})})"

console.log(isValid(s));
console.log(isValid2(s));