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


//--------------------------------------------

var trap2 = function(height) {
    
    let start = new Array(height.length).fill(0);
    let end = new Array(height.length).fill(0);
    
    start[0] = height[0];
    end[height.length-1] = height[height.length-1];

    for(let i = 1; i < height.length; i++){
        start[i] = Math.max(start[i-1], height[i]);
    }
    
    for(let i = height.length - 2; i >= 0; i--){
        end[i] = Math.max(end[i+1], height[i]);
    }

    let sum = 0;
    for(let i = 0; i < height.length; i++) {
        sum += ((Math.min(start[i], end[i])) - height[i]);
    }

    return sum;
};


let height = [4,2,0,3,2,5]

console.log(trap2(height));
//Output: 9