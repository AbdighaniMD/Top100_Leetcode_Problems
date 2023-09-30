/**
 * 150 leetcode medium. Evaluate Reverse Polish Notation
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (isOperator(token)) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            let result = evaluate(token, operand1, operand2);
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
}

function isOperator(token) {
    return token === "+" || token === "-" || token === "*" || token === "/";
}

function evaluate(token, operand1, operand2) {
    switch (token) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return Math.trunc(operand1 / operand2);
        default:
            return 0;
    }
}

let tokens = ["2","1","+","3","*"]; //Output: 9
console.log(evalRPN(tokens))