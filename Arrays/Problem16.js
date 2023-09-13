/**
 * 54 leetcode medium. Spiral Matrix
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let top = 0;
    let bottom = matrix.length-1
    let left = 0;
    let right = matrix[0].length-1;
    let size = matrix.length*matrix[0].length;

    while (result.length < size){
        for(let i = left; i <= right && result.length < size; i ++){
            result.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom && result.length < size; i ++){
            result.push(matrix[i][right]);
        }
        right--;

        for(let i = right; i >= left && result.length < size; i --){
            result.push(matrix[bottom][i]);
        }
        bottom--;

        for(let i = bottom; i >= top && result.length < size; i --){
            result.push(matrix[i][left]);
        }
        left++;
    }

    return result
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]] // Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder(matrix))