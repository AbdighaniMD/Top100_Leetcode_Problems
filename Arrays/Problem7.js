/**
 * 75 leetcode medium. Sort Colors
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let end = nums.length-1;
    let i=0;
    while(i <= end){

        if(nums[i] === 0){
            let temp = nums[start];
            nums[start] = nums[i];
            nums[i] = temp;
            start ++
            i++
        } else if (nums[i] === 2){
            let temp = nums[end];
            nums[end] = nums[i];
            nums[i] = temp;
            end--
        } else{
            i++
        }
        
    }

    return nums
};


nums = [2,0,2,1,1,0] // Output: [0,0,1,1,2,2]

console.log(sortColors(nums));