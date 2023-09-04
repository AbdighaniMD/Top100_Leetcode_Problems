/**
 * 167 leetcode. Two Sum II - Input Array Is Sorted // [Two pointer]
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length-1;
    let result = [];

    while(start < end){
        let sum = numbers[start] + numbers[end];
        if(sum > target){
            end --
        } else if(sum < target)  {
            start ++
        } else{
            result.push(start +1);
            result.push(end +1);
            break
        }
    }

    return result
};


let numbers = [2,7,11,15]
let target = 9


console.log(twoSum(numbers, target));
//Output: [1,2]