/*
  looping array row sebanyak num
    looping array collumn sebanyak num
    push xo randomXo

    jika x = 4
    push o

*/




function xo(size){
  let xoArr = [];
  let xoCount = Math.pow(size, 2);
  let midXO = Math.round(xoCount/2);
  var countO = 0;
  for(let i=0; i<xoCount; i++){
    if(countO < midXO){
      xoArr.push('o')
      countO++
    }else{
      xoArr.push('x')
    }
  }
  return xoArr
}

function ticTacToe(num){
  var result = [];
  var functXO = xo(num);
  var xoIndex;
  var countX=0
  for(let i=0; i<num; i++){
    let row=[];
    for(let j=0; j<num; j++){
      xoIndex = Math.floor(Math.random() * functXO.length)
      row.push(functXO[xoIndex]);
      functXO.splice(xoIndex, 1);

      // if(xoIndex === 'x'){
      //   countX++
      // }
    }
    result.push(row);
  }
  return result
}

console.log(ticTacToe(3));
