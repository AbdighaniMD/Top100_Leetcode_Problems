/**
 * 56 leetcode medium. Merge Intervals
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    else if (a[0] > b[0]) {
      return 1;
    }
    else {
      return a[1] - b[1];
    }
  });

  let answer = [];

  answer.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastInterval = answer[answer.length - 1];
    if (currentInterval[0] <= lastInterval[1]) {
      let newInterval = [Math.min(currentInterval[0], lastInterval[0]), Math.max(currentInterval[1], lastInterval[1])];
      answer.pop();
      answer.push(newInterval);
    }
    else {
      answer.push(currentInterval);
    }
  }
  return answer;
};

//---------------------------------------------------------------------------------
var merge2 = function (intervals) {
  const start = 0;
  const end = 1;

  intervals = intervals.sort((a, b) => a[start] - b[start]);

  let previous = intervals[0];
  let res = [previous];

  for (let current of intervals) {
    if (current[start] <= previous[end]) {
      previous[end] = Math.max(previous[end], current[end])
    } else {
      res.push(current);
      previous = current;
    }
  }
  return res
};




  /**
   * Output: [[1,6],[8,10],[15,18]]
   * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
   */
  let intervals = [[7,1],[2,6],[8,10],[15,18]]
  console.log(merge(intervals));

  console.log(merge2(intervals));
