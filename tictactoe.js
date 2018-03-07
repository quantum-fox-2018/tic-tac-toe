function tictactoe(row,col){
  let xo = 'XO';
  let board = [];
  for(let i=0; i<row; i++){
    let line = [];
    for(let j=0; j<col; j++){
      let content = xo[Math.floor(Math.random()*2)];
      line.push(content);
    }
    board.push(line);
  }
  let countX = 0;
  let countO = 0;
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[i].length; j++){
      if(board[i][j]=='X'){
        countX++;
      } else {
        countO++;
      }
    }
  }
  if(countX==5){
    console.log(board);
    return `Pemenangnya adalah X`;
  } else if(countO==5){
    console.log(board);
    return `Pemenangnya adalah O`;
  } else {
    return tictactoe(row,col);
  }
}

console.log(tictactoe(3,3));
