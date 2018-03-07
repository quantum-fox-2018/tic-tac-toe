function ticTacToe(row, col) {
  var isiArray = ['X', 'O']
  var banyakX = 0
  var banyakO = 0;
  var arrHasil = [];

  for (var i = 0; i < row; i++) {
    var arr = [];
    for (var j = 0; j < col; j++) {
      var random = Math.floor(Math.random() * (isiArray.length));
      var isi = isiArray[random];
      if (isi == 'X' && banyakX < 5 ) {
        banyakX += 1;
        arr.push(isi);
      } else if (isi == 'O' && banyakO < 5) {
        banyakO += 1;
        arr.push(isi);
      } else if (banyakX == 5) {
        arr.push(isiArray[1])
      } else if (banyakO == 5) {
        arr.push(isiArray[0])
      }
    }
    arrHasil.push(arr);
  }
  return arrHasil
}

console.log(ticTacToe(3, 3))
