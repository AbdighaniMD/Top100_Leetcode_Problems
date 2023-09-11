/**
 * 11 leetcode Medium. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */

let maxArea = function(height) {
    // note area = min(height (start, end)) * wide (start - end)
    let maxSumArea = 0;
    let start = 0; 
    let end = height.length-1;


   for(let i= 0; i < height.length; i++){
        let heightContainer = Math.min(height[start], height[end]);
        let wideContainer = end-start
        let currArea =  heightContainer * wideContainer;

        maxSumArea = Math.max(currArea, maxSumArea);

        if(height[start] < height[end]){
            start ++
        } else {
            end --
        }
    }

    return maxSumArea
}

let height = [1,8,6,2,5,4,8,3,7] //Output: 49
console.log(maxArea(height));