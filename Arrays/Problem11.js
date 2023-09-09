/**
 * 239 leetcode HARD, Sliding Window Maximum
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindowNaive = function(nums, k) {
    let WindowStart =0;
    let result = []
    let tempArr = []

    for(let i = 0; i < nums.length; i++){
        tempArr.push(nums[i])
        if( i >= k-1){
            result.push(Math.max(...tempArr))
            tempArr.shift(WindowStart)
            //tempArr.splice(0,1)
            WindowStart++
        }
    }

    return result
};

//-------------------------------------------------------------------
var maxSlidingWindow = function(nums, k) {
    const de = [];
    const result = [];

    de.push(0);
    for (let i = 1; i < k; i++) {
      while (de.length > 0 && nums[de[de.length - 1]] < nums[i]) {
        de.pop();
      }
      de.push(i);
    }
    result.push(nums[de[0]]);

    for (let j = k; j < nums.length; j++) {
        const startingPoint = j - k + 1;
        while (de.length > 0 && de[0] < j - k + 1) {
          de.shift();
        }
        while (de.length > 0 && nums[de[de.length - 1]] < nums[j]) {
          de.pop();
        }
        de.push(j);
        result.push(nums[de[0]]);
      }
    
      return result;
};


let nums = [1,3,-1,-3,5,3,6,7]
let k = 3 //Output: [3,3,5,5,6,7]

console.log(maxSlidingWindowNaive(nums, k))

console.log(maxSlidingWindow(nums, k))