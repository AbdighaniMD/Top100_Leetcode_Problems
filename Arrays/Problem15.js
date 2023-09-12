/**
 * 73 leetcode Medium. Set Matrix Zeroes | O(M*N)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let zeroePos = [];

    for(let i = 0; i < matrix.length; i++){ //row
        for(let j = 0 ; j < matrix[0].length; j++){//col
            if(matrix[i][j] === 0){
                zeroePos.push([i,j]);
            }
        }
    }

    console.log(zeroePos)
/*
    for(let i= 0; i < zeroePos.length; i++){
        const [row, col] = zeroePos[i]; // [1,1]

        for(let r = 0; r < matrix.length; r++){
            matrix[r][col] = 0;
        }

        for(let c = 0; c < matrix[0].length; c++){
            matrix[row][c] = 0;
        }
    }
*/
    return matrix
};


let  matrix =  [[1,1,1],[1,0,1],[1,1,1]]; // Output:[[1,0,1],[0,0,0],[1,0,1]]
console.log(setZeroes(matrix))