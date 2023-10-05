/**
 * 704 leetcode easy. Binary Search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //TODO: Write - Your - Code
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {

        // Finding the mid using floor division  
        let middle = Math.floor((start + end) / 2);

        //Target value is present at the middle of the array
        if (target === nums[middle]) {
            return middle;
        }

        //Target value is present in the low subarray
        if (target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}
let nums = [-1,0,3,5,9,12]
let target = 9 // Output: 9 exists in nums and its index is 4
console.log(search(nums, target));