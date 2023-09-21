/**
 * 49 leetcode medium. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let object = {};

    for(let i = 0; i < strs.length; i++){
        let sortIndex = strs[i].split("").sort().join("");

        //object[sortIndex] =  object[sortIndex].push(strs[i]) || []
        if(!object[sortIndex]){
            object[sortIndex] = [];
        }

        object[sortIndex].push(strs[i]);
       
    }

    return Object.values(object)
}


let strs = ["eat","tea","tan","ate","nat","bat"]  //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//console.log(strs[0].split("").sort().join(""))
console.log(groupAnagrams(strs));