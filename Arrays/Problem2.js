/**
 * leetcode 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {
    let min = Infinity
    let profit = 0

    for(let i = 0; i < prices.length; i++){
         min = Math.min(min, prices[i])

         profit = Math.max(profit, prices[i] - min)
    }

    return profit
}


//-------------------------------------------------------
var maxProfit2 = function(prices) {
    let i = 0;
    let mxProf= 0
    while( i < prices.length ){
        for(let a = i+1; a < prices.length; a++){
            mxProf = Math.max(mxProf, prices[a]- prices[i])
        }
        i++ 
    }
       return mxProf
} 


price = [7,6,4,3,1]

console.log(maxProfit(price));