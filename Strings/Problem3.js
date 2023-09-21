/**
 * 3 leetcode medium. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let object = {}
    let maxCount = 0;
    let startwindow = 0;
    for(let i = 0; i < s.length; i ++){
        let currentLetter = s[i];

        if(object[currentLetter] >= startwindow){
            startwindow = object[currentLetter] +1;
        }
        object[currentLetter]= i;

        maxCount = Math.max(maxCount, i - startwindow +1);
    }
    //console.log(object)
    return maxCount
}

//-------------------------------------------------------------
var lengthOfLongestSubstring2 = function(s) {
    let set = new Set()
    let maxCount = 0;
    let startwindow = 0;
    let endwindow = 0;

    while (endwindow < s.length){
        let letter = s[endwindow];

        if(!set.has(letter)){
            set.add(letter);
            maxCount = Math.max(maxCount, set.size);
            endwindow++
        } else{
            set.delete(s[startwindow]);
            startwindow++
        }
    }

    return maxCount
}



/**
 *  Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */
let  s = "abcabcbb" 
console.log(lengthOfLongestSubstring(s))
console.log(lengthOfLongestSubstring2(s))
