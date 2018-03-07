function ticTacToe(input) {
  var hasil = [];
  var countX = 0;
  var countO = 0;

  for (var i = 0; i < input; i++) {
    var row = [];
    for (var j = 0; j < input; j++) {
      var random = Math.round(Math.random());
      if (random === 1 && countO < 5) {
        row.push('O');
        countO++;
      } else if (random === 0 && countX < 5) {
        row.push('X');
        countX++;
      } else if (countX === 5) {
        row.push('O');
      } else if (countO === 5) {
        row.push('X');
      }
    }
    hasil.push(row);
  }
  return hasil;
}

console.log(ticTacToe(3));
