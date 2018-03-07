function ticTacToe(){
  var board     = [];
  var value     = 'XO'
  var random    = 0;
  var countX    = 0;
  var countO    = 0;

  for(var i = 0; i < 3; i++){
    board.push([]);
      for(var j = 0; j < 3; j++){
        random = Math.round(Math.random());
        //console.log(value[random]);
        if(value[random] === 'X' && countX < 5){
          countX++;
          board[i].push('X');
          console.log('countX: '+countX);
        } else if (value[random] === 'O' && countO < 5){
          countO++;
          board[i].push('O');
          console.log('countO :'+countO);
        }
      }
  }
  return board;
}


console.log(ticTacToe());
