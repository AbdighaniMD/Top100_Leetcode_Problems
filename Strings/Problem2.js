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

let groupAnagrams2 = function (strs) {
    const map = new Map();

    for (const str of strs) {

        let key = str.split("").sort().join("");
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    const result = [];
    for (const key of map.keys()) {
        result.push(map.get(key));
    }
    return result;
}

let strs = ["eat","tea","tan","ate","nat","bat"]  //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//console.log(strs[0].split("").sort().join(""))
console.log(groupAnagrams(strs));
console.log(groupAnagrams2(strs));