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
//--------------------------------------------------------------------

let search2 = function (nums, target) {
    const minIdx = findMinxIndix(nums)

    let start = binarySearch(nums, target, 0, minIdx - 1)
    let end = binarySearch(nums, target, minIdx, nums.length - 1)

    return Math.max(start, end)
}

let findMinxIndix = function (rotatedSortedArr) {
    let start = 0;
    let end = rotatedSortedArr.length - 1;

    if (rotatedSortedArr.length === 1) {
        return 0;
    }

    if (rotatedSortedArr[start] < rotatedSortedArr[end]) return 0

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) return mid;

        if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) return mid + 1;


        if (rotatedSortedArr[mid] < rotatedSortedArr[start]) {
            end = mid - 1
        } else {
            start = mid + 1
        }

    }

}

var binarySearch = function (nums, target, start, end) {
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



let nums = [4, 5, 6, 7, 0, 1, 2]
let target = 0 // Output: 4
console.log(search(nums, target))
console.log(search2(nums, target))