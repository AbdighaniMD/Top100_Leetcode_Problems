/**
 * 1 leetcod easy. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBasic = function(nums, target) {
    for(let i=0; i < nums.length-1; i++){
        for(let j=i+1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target){
               return [i,j]
            }
        }
    }
};
//-------------------------------------------------
var twoSumNaive = function(nums, target) { // ONLY GOOD FOR SORTED ARRAYS
    nums.sort(function(a, b){return a - b});
    let start = 0;
    let end = nums.length-1;

    while(start < end){
        let sum = nums[start] + nums[end];
        if(sum > target){
            end--
        } else if (sum < target){
            start++
        } else{
            return [start, end]
        }
    }
};


//-------------------------------------------------
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i < nums.length; i++){
        const compliment = target - nums[i];
        if(map.has(compliment)){
            //console.log(map)
            return [map.get(compliment), i]
        } else {
            map.set(nums[i], i);
        }
    }
}

let numsSorted = [2,7,11,15]
let target = 9 // Output: [0,1] 
let nums = [3,2,4]
let targets = 6 

console.log(twoSumBasic(numsSorted, target));
console.log(twoSumNaive(numsSorted, target));
console.log(twoSum(numsSorted, target));