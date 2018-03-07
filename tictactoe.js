function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function tictactoe(jumlahRow, jumlahCol) {
  var arrLuar = [];
  var countX = 0;
  var countO = 0;
  var xo = ["x", "o"];
  for(var i = 0; i < jumlahRow; i++) {
    var arrDalam = [];
    for(var j = 0; j < jumlahCol; j++) {
      var index = Math.round(getRandom(0, 1));
      if(index == 0 && countX < 5) {
        arrDalam.push(xo[0]);
        countX++;
      } else if(index == 0 && countX >= 5) {
        arrDalam.push(xo[1]);
        countO++;
      }
      if(index == 1 && countO < 5) {
        arrDalam.push(xo[1]);
        countO++;
      } else if(index == 1 && countO >= 5) {
        arrDalam.push(xo[0]);
        countO++;
      }
    }
    arrLuar.push(arrDalam);
  }
  console.log(arrLuar);
}

tictactoe(3, 3);
