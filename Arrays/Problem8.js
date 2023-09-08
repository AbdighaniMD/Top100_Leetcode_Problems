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

//----------------------------------------------------

var maxProduct2 = function(nums) {
  let prevMax =nums[0];
  let prevMin = nums[0];
  let result = nums[0];

  for(let i= 1; i < nums.length; i++){

    let currMax = Math.max(nums[i], nums[i]*prevMax, nums[i]*prevMin)
    let currMix = Math.min(nums[i], nums[i]*prevMax, nums[i]*prevMin)

    prevMax = currMax;
    prevMin = currMix;

    result = Math.max(result, currMax);
  }

  return result

}

let nums = [2,3,-2,4]; //Output: 6

console.log(maxProduct2(nums));


