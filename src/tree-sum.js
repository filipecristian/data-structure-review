class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = new TreeNode(
    5,
    new TreeNode (
        3,
        new TreeNode(2),
        new TreeNode(4)
    ),
    new TreeNode(7)
);


function sumTree(node = null) {
    let total = 0;
    
    if (node != null) {
        console.log(node.val);
    }

    if (node.right !== null) {
        sumTree(node.right);
    }

    if (node.left !== null) {
        sumTree(node.left);
    }
}

module.exports = { TreeNode, sumTree };