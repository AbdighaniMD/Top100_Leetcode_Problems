/**
 * 152 leetcode medium. Maximum Product Subarray [Kadane's Algorithm]
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   
    let sum = 0;
    if (nums.length == 1) {
        return nums[0];
    }

    let currentProduct = 1;
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        currentProduct *= nums[i];
        sum = Math.max(sum, currentProduct);
      }
      else {
        currentProduct = 1;
      }
    }

    currentProduct = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] != 0) {
        currentProduct *= nums[i];
        sum = Math.max(sum, currentProduct);
      }
      else {
        currentProduct = 1;
      }
    }
  
    return sum;
};


let nums = [2,3,-2,4]; //Output: 6

console.log(maxProduct(nums));


