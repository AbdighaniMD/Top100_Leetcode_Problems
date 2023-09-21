/**
 * 921 leetcode Medium. Minimum Add to Make Parentheses Valid
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValidBasic = function(s) {
    let object = {}

    for(let i=0; i<s.length; i++){
        object[s[i]] = object[s[i]] + 1 || 1;
    }

    if(object["("] === undefined){
        return object[")"]
    }
    if(object[")"] === undefined){
        return object["("]
    } else{
        return Math.abs(object["("] -  object[")"]);
    }    
};

var minAddToMakeValid = function(s) {
    let result = 0;
    let count = 0;

    for(let i=0; i<s.length; i++){
        if(s.charAt(i) === '('){
            count++
        } else if (count <= 0){
            result ++
        } else{
            count --
        }
    }

    result += count;
    //console.log(count)
    //console.log(result)

    return result;

};




let s1 = "())" //Output: 1
let s2 = "(((" //Output: 1
let s3 = ")))" //Output: 1
let s4 = "()))(("  //Output: 4
//console.log(minAddToMakeValidBasic(s3));
console.log(minAddToMakeValid(s2));