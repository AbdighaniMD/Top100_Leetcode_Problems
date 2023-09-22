/**
 * 15 leetcode medium. 3Sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(num) {
    if(num.length === 0) return [];

    num.sort((a, b)=>a - b);

    let result = [];

    for(let i =0; i < num.length-2; i++){
        // stop dulicates from occuring 
        if(i > 0 && num[i] === num[i-1]) continue;

        let j = i+1;
        let k = num.length-1

        while(j < k){
            let sum = num[i]+num[j]+num[k];
            if(sum === 0){
                result.push([num[i],num[j],num[k]])
                // stop duplicates;
                while(num[j] === num[j+1]) j++;
                while(num[k] === num[k+1]) k--;

                j++
                k--
            } else if (sum < 0){
                j++
            } else {
                k--
            }
        }

    }
    return result;
}

//-----------------------------------------------------------------------
var threeSum2 = function(num) {

}

let nums = [-1,0,1,2,-1,-4]; //Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums))
console.log(threeSum2(nums))