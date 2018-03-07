function ticTacToe(jumlahRow,jumlahColumn){

  let outputTicTacToe = [];
  let jumlahX = Math.round(Math.random()) + Math.trunc((jumlahRow*jumlahColumn)/2);
  let jumlahO = (jumlahRow*jumlahColumn) - jumlahX;

  for(let i=0;i<jumlahRow;i++){

    outputTicTacToe.push([]);

    var OXroll = Math.round(Math.random());

    for(let j=0; j<jumlahColumn; j++){

      if( OXroll == 0 && jumlahX != 0 || jumlahO == 0){
        var sign = 'X'
        jumlahX--;
      }
      else if( OXroll == 1 && jumlahO != 0 || jumlahX == 0){
        var sign = 'O'
        jumlahO--;
      }
      debugger;
      outputTicTacToe[i].push(sign);
    }
  }

  return outputTicTacToe;;
}

console.log(ticTacToe(3,3));
