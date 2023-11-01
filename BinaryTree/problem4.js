/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * leetcode 102 Medium. Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    
    let queue = []
    let result = []
    queue.push(root)

    while(queue.length){
        let level = [];
        let levelSize = queue.length

        while (levelSize) {

            let currentNode = queue.shift()
        
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
            
            level.push(currentNode.val)
            levelSize--;
        }
        result.push(level);
    }

     console.log(result)
};