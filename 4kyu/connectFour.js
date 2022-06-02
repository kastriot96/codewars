/*

Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.

*/

function whoIsWinner(piecesPositionList) {
  //grid 6x7, those being named from A to G
  let grid = [
    [A, B, C, D, E, F, G],
    [A, B, C, D, E, F, G],
    [A, B, C, D, E, F, G],
    [A, B, C, D, E, F, G],
    [A, B, C, D, E, F, G],
    [A, B, C, D, E, F, G],
  ];
  //check if draw
  if (piecesPositionList.length === 42) {
    return "Draw";
  }
  //check if there is a winner
  for (let i = 0; i < piecesPositionList.length; i++) {
    let piece = piecesPositionList[i];
    let [row, column] = piece.split("_");
    let color = column[0];
    let rowNumber = row.charCodeAt(0) - 65;
    grid[rowNumber][column.charCodeAt(0) - 65] = color;
    if (checkForWinner(grid, color)) {
      return color;
    }
  }
}
