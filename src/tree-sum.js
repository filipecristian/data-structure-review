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
        total += node.val;
    }

    if (node.right != null) {
        total += sumTree(node.right);
    }

    if (node.left != null) {
        total += sumTree(node.left);
    }

    return total;
}

module.exports = { TreeNode, sumTree };