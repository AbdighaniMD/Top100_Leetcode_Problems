/**
 * leetcode 53. Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 * 
 */

/**
 Given an integer array nums, find the  subarray
 with the largest sum, and return its sum.
*Time Complexity : O(n)
*Space Complexity: O(1)
 */
var maxSubArray = function (nums) {

    let prev = 0;
    let max = -Infinity

    for (let i = 0; i < nums.length; i++){
        prev = Math.max(nums[i], prev+nums[i]);

        max = Math.max(max, prev)
    }

    return max
};

//------------------------------------------

var maxSubArray2 = function (nums) {

    let currSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++){

        if (currSum < 0){
            currSum = 0;
        }

        currSum += nums[i];

        if(currSum > maxSum){
            maxSum = currSum
        }
    }

    return maxSum
};


let array = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray2(array));

// solution = [6]