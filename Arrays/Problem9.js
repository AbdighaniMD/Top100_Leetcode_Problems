/**
 * 238 leetcode MEDIUM. Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let forwardArr = [];
    let start = 1;

    for(let i =0; i < nums.length; i++){
        forwardArr.push(start);
        start  = start * nums[i];
    }
   //console.log(forwardArr)

    let res = [];
    let start2 = 1;
    for(let i = nums.length-1; i >= 0; i--){
        res.unshift(start2*forwardArr[i]);
        start2  = start2 * nums[i];
    }

    return res;
    
};
//-------------------------------------------------

var productExceptSelf2 = function(nums) { 

};


let nums = [1,2,3,4] //Output: [24,12,8,6]
console.log(productExceptSelf(nums))