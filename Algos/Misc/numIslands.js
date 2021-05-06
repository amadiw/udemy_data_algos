const numIslands = (grid) => {
  //nested for loop to traverse grid
  //if a '1' is encountered, then call dfs function
  //dfs function should 1. check if elem is out of bounds or a 0. 2. if not, then call recursively call dfs on all directions accumulating sum in numIslands variable

  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        islands++;
        dfs(grid, i, j);
      }
    }
  }
  return islands;
};

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] == 0
  ) {
    return 0;
  }
  grid[i][j] = 0
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};

console.log(
  numIslands([
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "1", "0"],
  ])
); //3
