/**
 * 35 leetcode Easy. Search Insert Position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    
    if(target < nums[left]) {
        return 0;
    }
    
    if(target > nums[right]){
        return nums.length;
    }
    
    while(left <= right){
        
        let mid = left + Math.floor((right-left)/2);
        
        //found target
        if(target === nums[mid]  ){
            return mid
        }
        //Target value is present in the low subarray
        if(target < nums[mid]){
            right = mid - 1
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

let nums = [1,3,5,6]
let target = 5 // Output: 2
console.log(searchInsert(nums, target));
