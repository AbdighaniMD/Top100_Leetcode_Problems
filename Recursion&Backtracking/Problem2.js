/**
 * 78 leetcode MEDIUM. Subsets
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
    let result = [[]]

    function dfs(index, current){
        for(let i = index; i < nums.length; i++){
            current.push(nums[i]);
            result.push([...current]);
            dfs(i+1, current)
            //backtrack;
            current.pop();
        }
    }
    dfs(0, []);
    return result
};

//------------------------------------------------
let subsetsArr = [];
let numsArr = [];

var subsets2 = function(nums) {
  let subset = [];
  subsetsArr = [];
  numsArr = nums;
  backtrack(0, subset);
  return subsetsArr;
};

function backtrack(i, subset) {
  if (i >= numsArr.length) {
    let subsetArr = [];
    for(let i = 0; i < subset.length; i++) {
      subsetArr.push(subset[i]);
    }
    subsetsArr.push(subsetArr);
  }
  else {
    backtrack(i + 1, subset);

    subset.push(numsArr[i]);
    backtrack(i + 1, subset);
    subset.pop();
  }
}


let nums = [1,2,3]; //Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets2(nums));