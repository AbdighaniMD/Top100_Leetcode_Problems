/**
 * 42 leetcode HARD. Trapping Rain Water
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0;
    let start = 0;
    let end = 0;
    
    for(let i = 1; i < height.length-1; i++){
        start= height[i];
        for(let l = 0; l < i; l++){
            start = Math.max(start, height[l]);
        }
        end= height[i];
        for(let r = i+1; r < height.length; r++){
            end = Math.max(end, height[r]);
        }

        sum = sum + (Math.min(start, end)-height[i]);
    }
    return sum;
};



let height = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(height));
//Output: 9