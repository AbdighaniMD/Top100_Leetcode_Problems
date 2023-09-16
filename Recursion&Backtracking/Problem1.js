/**
 * 39 leetcode medium. Combination Sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var DPcombinationSum = function(candidates, target) {

    candidates.sort((a,b) => a - b);
    let dp = [[[]]];

    for(let sum = 0; sum <= target; sum++ ){
        dp[sum] = [];
        let combine = []

        for(let i = 0; i < candidates.length && candidates[i] <= sum; i++){
            if(sum === candidates[i]){
                combine.push([candidates[i]]);
            } else {
                for(let prev of dp[sum-candidates[i]]){
                    if(candidates[i] >= prev[prev.length-1]){
                        combine.push([...prev, candidates[i]]);
                    }
                }
            }
            dp[sum] = combine;
        }
    }

    return dp[target]
};
//-----------------------------------------------------
var RecursioncombinationSum = function(candidates, target) {
    let result = [];

    function dfs (index, currentVal, arr){
        if(currentVal < 0) return ;
        if (currentVal === 0 ){
            result.push([...arr])
        }

        for(let i = index; i < candidates.length; i++){
            arr.push(candidates[i]);
            dfs(i, currentVal-candidates[i], arr);
            arr.pop()
        }
    }
    dfs(0, target, [])

    return result
};


let candidates = [2,3,6,7]; 
let target = 7 //Output: [[2,2,3], [7]]

console.log(DPcombinationSum(candidates, target))

console.log(RecursioncombinationSum(candidates, target))