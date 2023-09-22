/**
 * 217 leetcode easy. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateBasic = function(nums) {
    let max = 0;
    let i = 0;
    while(i < nums.length){
        for(let a = i+1; a < nums.length; a++){
            if(nums[i] == nums[a]){
                max++
                break
            }
        }
        i++
    }
    return max !== 0
};
// ------------------------------------------------------
var containsDuplicate = function(nums) {
    let visited = {};
    let i = 0;
    while(i < nums.length){
        let currentValue = nums[i];
        if(visited[currentValue]){
            return true
        } else {
            visited[currentValue] = true
        }
        i++
    }
    
    return false 
    
};
//-------------------------------------------------------
var containsDuplicate2 = function(nums) {
    let set = new Set(nums);
    
    if(nums.length === set.size){
        return false 
    } else{
        return true
    }
    
    
};

let nums = [1,2,3,1]; //Output: true
console.log(containsDuplicateBasic(nums))
console.log(containsDuplicate(nums))
console.log(containsDuplicate2(nums))
