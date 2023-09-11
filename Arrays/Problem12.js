/**
 * 189 leetcode medium. Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotateNaive = function(nums, k) {

    // Step 1: Reverse the whole array
    let start = 0;
    let end = nums.length-1;
    while( start < end){
        let temp = nums[start];
        nums[start]= nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    //console.log(nums);

    // Step 2: Reverse the first k elements
    let start2 = 0;
    let end2 = k-1;
    for(let i = 0; i < k-1; i++ ){
              
            let temp = nums[start2];
            nums[start2] = nums[end2];
            nums[end2] = temp;
            start2++
            end2--;
    }
    //console.log(nums);
    
    // step 3: Reverse the remaining elements
    let start3 = k;
    let end3 = nums.length-1;
    for(let i = 0; i < k-1; i++ ){
              
            let temp = nums[start3];
            nums[start3] = nums[end3];
            nums[end3] = temp;
            start3++
            end3--;
    }

    return nums

};

//----------------------------------------------------------------

var rotate = function(nums, k) {
    k = k % nums.length;

   console.log(k);
   // Step 1: Reverse the whole array
   reverseArray(nums, 0, nums.length-1);
   // Step 2: Reverse the first k elements
   reverseArray(nums, 0, k-1);
   // step 3: Reverse the remaining elements
   reverseArray(nums, k, nums.length-1)

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
let k = 3 //Output: [5,6,7,1,2,3,4]

console.log(rotateNaive(nums, k))
console.log(rotate(nums, k))

