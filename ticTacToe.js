function ticTacToe(jumlahRow, jumlahCol) {
  let symbol = ['X', 'O']
  let newArr = []
  let counterX = 0
  let counterO = 0
  for (var i = 0; i < jumlahRow; i++) {
    newArr.push([])
    for (var j = 0; j < jumlahCol; j++) {
      var random = symbol[Math.floor(Math.random() * symbol.length)]
      if (random === 'X') {
        counterX++
      } else {
        counterO++
      }

      if (counterX > 5) {
        random = 'O'
        counterX--
        counterO++
      } else if (counterO > 5) {
        random = 'X'
        counterX++
        counterO--
      }
      newArr[i].push([random])
    }
  }
  console.log(newArr);
  if (counterX > counterO) {
    console.log('The Winner Is : X');
  } else {
    console.log('The Winner Is : O');
  }
}

ticTacToe(3, 3)
