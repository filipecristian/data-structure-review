const service = require('../src/climbing-stairs');

/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
const provider = () => [
    [
        /**
         *   Input: n = 2
         *   Output: 2
         *   Explanation: There are two ways to climb to the top.
         *   1. 1 step + 1 step
         *   2. 2 steps
         */

        "Example 1", 2, 2
    ],
    [
        /**
          *  Input: n = 3
          *  Output: 3
          *  Explanation: There are three ways to climb to the top.
          *  1. 1 step + 1 step + 1 step
          *  2. 1 step + 2 steps
          *  3. 2 steps + 1 step
         */
        "Example 2", 3, 3
    ],
    [
        /**
         * Input: n = 4
         * Output: 5
         * Explanation: Ways: [1+1+1+1], [1+2+1], [2+1+1], [1+1+2], [2+2]
         */
        "Example 3", 4, 5
    ],
    [
        /**
         * Input: n = 5
         * Output: 8
         * Explanation: Ways: [1+1+1+1+1], [1+1+1+2], [1+1+2+1], [1+2+1+1], [2+1+1+1], [2+2+1], [2+1+2], [1+2+2]
         */
        "Example 4", 5, 8
    ],
    [
        /**
         * Input: n = 1
         * Output: 1
         * Explanation: Only one way: [1]
         */
        "Edge case: n = 1", 1, 1
    ],
];

describe('test two-demensional array', () => {
    it.each(provider())('test: %s', (name, input, result) => {
            expect(service.climbStairs(input)).toEqual(result);
     });
});
