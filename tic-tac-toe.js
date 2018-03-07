function tictactoe(){
  var rows = 3
  var coloms = 3
  var arrColom = []
  var countX = 0; countO = 0
  for(var i=0; i<rows; i++){
    var arrRow = []
    for(var j=0; j<coloms; j++){
      // var hurufX0 = getRandomXO(0,2)
      var angkaRandom = Math.floor(Math.random()*2)
      if(angkaRandom===1 && countX<4){
        countX++
        // console.log(countX)
        arrRow.push('X')
      }
      else{
      // else if(angkaRandom===0 && countO<5){
        countO++
        arrRow.push('O')
      }
      // }
      // console.log(angkaRandom)
    }
    arrColom.push(arrRow)
  }
  return arrColom
}
console.log(tictactoe())


//test
function getRandomXO(){
  console.log(Math.floor(Math.random()*2))
}
// console.log(getRandomXO())
