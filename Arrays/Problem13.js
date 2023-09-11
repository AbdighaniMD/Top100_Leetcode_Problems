/**
 * 485 leetcod Easy. Max Consecutive Ones
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentMax = 0
    let max = 0;
    for(let i = 0; i < nums.length; i++){

        if (nums[i] === 0){
            currentMax = 0
        } else {
            currentMax ++;
            if(currentMax > max){
                max = currentMax;
            }
        }

        //max = Math.max(max, currentMax);
    }

    return max
};

let nums = [1,1,0,1,1,1]; //Output: 3
let nums1 = [1,0,1,1,0,1] //Output: 2
console.log(findMaxConsecutiveOnes(nums))