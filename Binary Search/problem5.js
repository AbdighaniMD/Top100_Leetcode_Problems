/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    if (nums.length === 1) return nums[0];

    if (nums[start] < nums[end]) return nums[start];

    while (start <= end) {
        // Find mid 
        let mid = Math.floor((end + start) / 2);

        let startVal = nums[start];
        let midVal = nums[mid];
        let startOfMid = nums[mid - 1];
        let endOfMid = nums[mid + 1];

        if (midVal > endOfMid) {
            return endOfMid
        } else if (startOfMid > midVal) {
            return midVal
        }

        if (midVal > startVal) {
            start = mid + 1;
        } else {
            end = mid + 1;
        }
    }
};


let nums = [3,4,5,1,2]; //Output: 1 |  Explanation: The original array was [1,2,3,4,5] rotated 3 times.
console.log(findMin(nums))