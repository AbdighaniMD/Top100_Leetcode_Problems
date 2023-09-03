/**
 * 283 leetcode. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * with a capy
 * Note that you must do this in-place without making a copy of the array.
 * 
 */
var moveZeroes = function(nums) {
    
    let temp = [];
    let zeros = []
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            zeros.push(nums[i]);
        }else{
             temp.push(nums[i]);
        }
       
    }
    return temp.concat(zeros)
};


//---------------------------------------------

var moveZeroes2 = function (nums) {

    let i = 0
    let prev = 0
    while (i < nums.length) {

        if (nums[i] != 0) {
            let temp = nums[prev];
            nums[prev] = nums[i];
            nums[i] = temp;
            prev++;
        }
        //console.log(nums[i])

        i++
    }
    return nums
};


let nums = [0,1,0,3,12] //Output: [1,3,12,0,0]

console.log(moveZeroes2(nums));