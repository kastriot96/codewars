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

/*additional solutions gathered from google

const pieces_position_list = {
  yellowWins: [
    "B_Red",
    "A_Yellow",
    "C_Red",
    "B_Yellow",
    "C_Red",
    "C_Yellow",
    "D_Red",
    "E_Yellow",
    "D_Red",
    "E_Yellow",
    "D_Red",
    "D_Yellow"
  ],
  redWins: [
    "A_Red",
    "A_Yellow",
    "B_Red",
    "B_Yellow",
    "C_Red",
    "C_Yellow",
    "D_Red",
    "D_Yellow"
  ],
  draw: ["A_Red", "G_Yellow", "B_Red", "F_Yellow", "C_Red", "E_Yellow"]
};

const board_map = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6
};

const checkDiagonal = (boardMatrix, currentRow, currentColumn) => {
  let trackAlign = 0;
  let count = 0;
  while (count < 3) {
    count++;
    // check up right
    if (
      boardMatrix[currentRow - count] &&
      boardMatrix[currentRow - count][currentColumn + count] &&
      boardMatrix[currentRow - count][currentColumn + count] ===
        boardMatrix[currentRow][currentColumn]
    ) {
      console.log(trackAlign);
      trackAlign++;
    }
    // check up left
    if (
      boardMatrix[currentRow - count] &&
      boardMatrix[currentRow - count][currentColumn - count] &&
      boardMatrix[currentRow - count][currentColumn - count] ===
        boardMatrix[currentRow][currentColumn]
    ) {
      trackAlign++;
    }
    // check down right
    if (
      boardMatrix[currentRow + count] &&
      boardMatrix[currentRow + count][currentColumn + count] &&
      boardMatrix[currentRow + count][currentColumn + count] ===
        boardMatrix[currentRow][currentColumn]
    ) {
      trackAlign++;
    }
    // check down left
    if (
      boardMatrix[currentRow + count] &&
      boardMatrix[currentRow + count][currentColumn - count] &&
      boardMatrix[currentRow + count][currentColumn - count] ===
        boardMatrix[currentRow][currentColumn]
    ) {
      trackAlign++;
    }
  }
  return trackAlign === 3;
};

const checkVertical = (boardMatrix, currentRow, currentColumn) => {
  let trackAlign = 0;
  let count = 0;
  while (count < 3) {
    // check down
    count++;
    if (
      boardMatrix[currentRow + count] &&
      boardMatrix[currentRow + count][currentColumn] ===
        boardMatrix[currentRow][currentColumn]
    ) {
      trackAlign++;
    }
  }
  return trackAlign === 3;
};

const checkHorizontal = (boardMatrix, currentRow, currentColumn) => {
  let trackAlign = 0;
  let count = 0;
  while (count < 3) {
    count++;
    // check left
    if (
      boardMatrix[currentRow] &&
      boardMatrix[currentRow][currentColumn - count] ===
        boardMatrix[currentRow][currentColumn]
    ) {
      trackAlign++;
    }
    // check right
    if (
      boardMatrix[currentRow] &&
      boardMatrix[currentRow][currentColumn + count] ===
        boardMatrix[currentRow][currentColumn]
    ) {
      trackAlign++;
    }
  }
  return trackAlign === 3;
};

const getCheckerColumn = checker => {
  return checker && checker.substring(0, checker.indexOf("_"));
};

const getCheckerColor = checker => {
  return checker && checker.substring(checker.indexOf("_") + 1, checker.length);
};

const connectFour = pieces_position_list => {
  const board = {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  };
  let i = 0;
  while (i < pieces_position_list.length) {
    const column = board_map[getCheckerColumn(pieces_position_list[i])];
    const color = getCheckerColor(pieces_position_list[i]);
    let j = 6;
    while (j > 0) {
      j--;
      if (board.matrix[j][column] === 0) {
        board.matrix[j][column] = color;
        if (
          checkDiagonal(board.matrix, j, column) ||
          checkHorizontal(board.matrix, j, column) ||
          checkVertical(board.matrix, j, column)
        ) {
          console.log("Result:");
          console.log(`The winner is ${color}!`);
          console.log(board.matrix);
          console.log("\n");
          return;
        }
        break;
      }
    }
    i++;
  }

  console.log("Is a draw !");
  console.log(board.matrix);
  console.log("\n");
};

//Tests
console.log("Test 1");
connectFour(pieces_position_list.yellowWins);
console.log("Test 2");
connectFour(pieces_position_list.redWins);
console.log("Test 3");
connectFour(pieces_position_list.draw);

*/
