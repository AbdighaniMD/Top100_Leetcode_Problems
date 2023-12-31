/**
 * 36 leetcode medium. Valid Sudoku
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        let set = new Set();
        for(let j = 0; j < board[i].length; j++){
            let cell = board[i][j];
            if(cell === ".") continue;
            if(set.has(cell)) return false;
            set.add(cell)
        }
    }

    for(let i = 0; i < board.length; i++){
        let set = new Set();
        for(let j = 0; j < board[i].length; j++){
            let cell = board[j][i];
            if(cell === ".") continue;
            if(set.has(cell)) return false;
            set.add(cell)
        }
    }

    for(let i = 0; i < 3; i++ ){
        for(let j = 0; j < 3; j++ ){
            let set = new Set();
            for(let k = 0; k < 3; k++ ){
                for(let l = 0; l < 3; l++ ){
                    const cell = board[3*i+k][3*j+l];
                    if(cell === ".") continue;
                    if(set.has(cell)) return false;
                    set.add(cell)
                }
            }
        }
    }
    return true;
};

var isValidSudoku2 = function(board) {
    let row = [], cols = [], boxes =[]

    for(let i = 0; i < board.length; i++){
        row.push(new Set())
        cols.push(new Set())
        boxes.push(new Set())
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            let cell = board[j][i];
            if(cell === ".") continue;
            const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3);
            if(row[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell)) return false;
            row[i].add(cell)
            cols[j].add(cell)
            boxes[boxNum].add(cell)
        }
    }


    return true;
};


let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]; // Output: true

console.log(isValidSudoku2(board));

