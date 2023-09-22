/**
 * 242 leetcode easy. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    
    let hashMap = {};
    let i = 0;
    while(i < s.length){
        let currentValue = s[i];
        if(!(hashMap[currentValue])){
            hashMap[currentValue] = 1;
        } else {
            hashMap[currentValue] ++;
        }
        console.log(hashMap[currentValue])
        i++
    }
    
     console.log(hashMap);
    
    let a = 0;
    while(a < t.length){
        let currentValue = t[a];
        
        if(!(hashMap[currentValue])){
           return false
        } else {
            hashMap[currentValue] --;
        }
      
        a++
    }
   
return true
};

let  s = "anagram"
let t = "nagaram" //Output: true
console.log(isAnagram(s, t))