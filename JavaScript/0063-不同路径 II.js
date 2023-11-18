/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(1).map(v => new Array(n).fill(0));
    // 初始化 dp
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
        dp[i][0] = 1;
    }

    for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
        dp[0][i] = 1;
    }

    for (let i = 0; i < m; i++) {
        for (let k = 0; k < n; k++) {
            dp[i][k] = obstacleGrid[i][k] === 0 ? 0 : dp[i - 1][k] + dp[i][k - 1];
        }
    }
    return dp[m - 1][n - 1];
}

/**
 * @description  内存优化，直接以原数组为dp数组
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    for (let i = 0; i < m; i++) {
        for (let k = 0; k < n; k++) {
            // 不是障碍物
            if (obstacleGrid[i][k] === 0) {
                if (i === 0) {
                    // 取左边的值
                    obstacleGrid[i][k] = obstacleGrid[i][k - 1] ?? 1;
                } else if (k === 0) {
                    // 取上边的值
                    obstacleGrid[i][k] = obstacleGrid[i - 1][k];
                } else {
                    // 取左边和上边的和
                    obstacleGrid[i][k] = obstacleGrid[i - 1][k] + obstacleGrid[i][k - 1];
                }
            } else {
                // 如果是障碍物，则路径为0
                obstacleGrid[i][k] = 0;
            }
        }
    }
    return obstacleGrid[m - 1][n - 1];
}
