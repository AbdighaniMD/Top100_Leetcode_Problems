/**
 * 169 leetcode. Majority Element
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let object = {}

    for(let i=0; i < nums.length; i++){
        object[nums[i]] = object[nums[i]] + 1 || 1;
    }

    for (let key in object) {
        if (object[key] > Math.floor(nums.length/2)){
            return key
        }
    }
};


//-------------------------------------------------

var majorityElement2 = function(nums) {
    nums.sort()
    return nums[Math.floor(nums.length/2)]
};


majority = [2,2,1,1,1,2,2]
majority1 = [1,2,3,4,5,6]

console.log(majorityElement(majority));
