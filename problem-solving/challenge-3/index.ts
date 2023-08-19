export const findLessCostPath = (matrix: number[][]): number => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dp: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(Number.POSITIVE_INFINITY));

  dp[0][0] = matrix[0][0];

  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          if (row > 0) {
              dp[row][col] = Math.min(dp[row][col], dp[row - 1][col] + matrix[row][col]);
          }
          if (col > 0) {
              dp[row][col] = Math.min(dp[row][col], dp[row][col - 1] + matrix[row][col]);
          }
      }
  }

  return dp[rows - 1][cols - 1];
};
