/**
 * 128 leetcode medium. Longest Consecutive Sequence
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxCount = 0;

    for(let num of set){
        if (set.has(num-1)) continue;
        let currentMax = 1;

        while(set.has(num+1)){
            currentMax ++
            num++
        }

        maxCount = Math.max(maxCount, currentMax)
    }

    return maxCount;
};

let nums = [100,4,200,1,3,2] // Output: 4
//The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
console.log(longestConsecutive(nums));