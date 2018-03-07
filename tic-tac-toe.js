function ticTacToe () {
  var tic_tac_toe = [];
  var arrMarks = [];
  var marks = ['X', 'O'];
  var countX = 0, countO = 0;

  // RANDOMIZE THE TIC TAC TOE MARKS 'X' & 'O'
  for (let i = 0; i < 9; i++) {
    var randomMarks = marks[Math.floor(Math.random() * 2)];
    if (randomMarks === 'X' && countX < 4) {
      arrMarks.push(randomMarks);
      countX++;
    } else if (randomMarks === 'O' && countO < 4) {
      arrMarks.push(randomMarks);
      countO++;
    }
  }

  // IF THE MARKS IS STILL NOT 9
  if (arrMarks.length < 9) {
    var sisa = 9 - arrMarks.length;
    if (countX === 4) {
      for (let j = 0; j < sisa; j++) {
        arrMarks.push('O');
        countO++
      }
    } else if (countO === 4) {
      for (let k = 0; k < sisa; k++) {
        arrMarks.push('X');
        countX++;
      }
    }
  }

  // SPLIT TO 3 ROWS, THEN JOIN TO 1 ARRAY
  var row1 = arrMarks.slice(0,3);
  var row2 = arrMarks.slice(3,6);
  var row3 = arrMarks.slice(6)
  tic_tac_toe.push(row1, row2, row3);

  console.log(`X: ${countX}, O: ${countO}`);
  return tic_tac_toe;
}

console.log(ticTacToe());
