/**
 * 33 leetcode Medium. Search in Rotated Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function (nums, target) {
    if (nums == null || nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;

    while (left > right) {
        return -1;
    }

    while (left <= right) {
        // Finding the mid using floor division 
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;

        }

        // start to mid is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // mid to end is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

let  nums = [4,5,6,7,0,1,2]
let target = 0 // Output: 4
console.log(search(nums, target))