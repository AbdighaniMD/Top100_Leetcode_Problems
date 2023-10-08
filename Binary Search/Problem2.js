/**
 * 34 leetcode Medium. Find First and Last Position of Element in Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRangeBasic = function binarySearch(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {

        while (nums[i] === target) {
            result.push(i);
            i++
        }
    }

    if (result.length === 0) {
        return [-1, -1]
    }

    return [result[0], result[result.length - 1]]

}

var searchRange = function binarySearch(nums, target) {
    let find = [];
    find[0] = findLowIndex(nums, target);
    find[1] = findHighIndex(nums, target);
    return find;
}


let findLowIndex = function (nums, target) {
    //TODO: Write - Your - Code
    let index = -1;

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {

        let mid = start + Math.floor((end - start) / 2);

        //find target 
        if (nums[mid] === target) {
            index = mid;
            end = mid - 1 // Look in the left sub-array
        } else if (target < nums[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return index;
};

let findHighIndex = function (nums, target) {
    //TODO: Write - Your - Code
    let index = -1;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {

        let mid = start + Math.floor((end - start) / 2);

        //find target 
        if (nums[mid] === target) {
            index = mid;
            start = mid + 1 // Look in the right sub-array
        } else if (target < nums[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }

    }

    return index;
};


let nums = [5, 7, 7, 8, 8, 10]
let target = 8 //Output: [3,4]
console.log(searchRangeBasic(nums, target));

console.log(searchRange(nums, target));
