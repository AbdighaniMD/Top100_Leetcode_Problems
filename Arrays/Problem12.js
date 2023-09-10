/**
 * 189 leetcode medium. Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotateNaive = function(nums, k) {
    let left = 0;
    let right =  nums.length-1;
    for(let i = 0; i < nums.length; i++ ){
              
        if ( i < nums.length-k) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++
            right--;
        }

    }
    return nums
};

//----------------------------------------------------------------

var rotate = function(nums, k) {
    k = k % nums.length;


   //console.log(k);
   reverseArray(nums, 0, nums.length-1);
   reverseArray(nums, 0, k-1);
   reverseArray(nums, k, nums.length-1 )

};

let reverseArray = function(nums, start, end){
   while(start < end){
       let temp = nums[start];
       nums[start] = nums[end];
       nums[end]= temp;
       start++
       end--
   }
}


let nums = [1,2,3,4,5,6,7]
let k = 3

console.log(rotateNaive(nums, k))
//console.log(rotate(nums, k))

