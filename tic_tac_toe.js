function tic_tac_toe() {

  let board = [[], [], []]
  let character = 'XO'
  let counterX = 0
  let counterO = 0

  for (var i = 0; i < board.length; i++) {

    while (board[i].length < 3) {

      let randomXO = Math.floor(Math.random() * 2)

      if (randomXO == 0 && counterO < 5) {

        counterO += 1
        board[i].push(' O ')

      }

      if (randomXO == 1 && counterX < 5){

        counterX += 1
        board[i].push(' X ')

      }

    }

  }

  console.log(board);

}

tic_tac_toe()








// if (board[i].length == 3) {
//   break
// }
//
// if (randomXO == 0) {
//   counterX += 1
//   board[i].push(' X ')
//
//   if (counterX == 5) {
//     counterX += 1
//     board[i].push(' O ')
//   }
//
// }else {
//   counterO += 1
//   board[i].push(' O ')
//
//   if (counterO == 5) {
//     counterO += 1
//     board[i].push(' X ')
//   }
// }
