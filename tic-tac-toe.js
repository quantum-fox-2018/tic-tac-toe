function ticTacToe () {
  debugger;
  var tic_tac_toe = [];
  var o;
  var x = Math.floor(Math.random() * (6-4) + 4);

  if (x === 4) {
    o = 5;
  } else {
    o = 4;
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (typeof tic_tac_toe[i] === 'undefined' || tic_tac_toe[i] === null || tic_tac_toe[i].length === null || tic_tac_toe[i].length === 0) {
        tic_tac_toe[i] = [];
      }
      var chooseXO = Math.floor(Math.random() * (2-0) + 0);
      if (chooseXO === 0 && x === 0) {
        chooseXO = 1;
      }else if (chooseXO === 1 && o === 0) {
        chooseXO = 0;
      }
      if (chooseXO === 0) {
        tic_tac_toe[i].push('X');
        x--;
      } else{
        tic_tac_toe[i].push('O');
        o--;
      }
    }
  }

  return tic_tac_toe;
}

console.log(ticTacToe());
