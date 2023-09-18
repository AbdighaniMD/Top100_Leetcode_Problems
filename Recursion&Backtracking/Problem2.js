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


let nums = [1,2,3]; //Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets(nums));