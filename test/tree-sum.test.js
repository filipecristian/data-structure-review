const {TreeNode, sumTree} = require('../src/tree-sum');

const tree = new TreeNode(
    5,
    new TreeNode (
        3,
        new TreeNode(2),
        new TreeNode(4)
    ),
    new TreeNode(7)
);

describe('test sum all tree', () => {
    it('sum should be 21', () => {
        let sum = sumTree(tree);
        expect(sum).toBe(21);
    });
});