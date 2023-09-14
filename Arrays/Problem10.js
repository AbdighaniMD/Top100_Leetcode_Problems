/**
 * 1929 leetcode Easy. Concatenation of Array
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

    let result = [];
    for(let i = 0; i < nums.length; i++){
        result.push(nums[i])
    }

    return nums.concat(result);
};
//--------------------------------------------------
var getConcatenation2 = function(nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        nums.push(nums[i])
    }
    return nums
};


let nums = [1,2,1] //Output: [1,2,1,1,2,1]
console.log(getConcatenation2(nums))