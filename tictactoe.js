function getTicTacToe(baris, kolom){
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < baris; i++) {
    var tempArr = [];
    for (var j = 0; j < kolom; j++) {
      if(xCount === Math.ceil(baris*kolom/2)){
        tempArr.push("o")
        oCount++;
      }else if(oCount === Math.ceil(baris*kolom/2)){
        tempArr.push("x")
        xCount++;
      }else{
        if (getRandomInt(0,2) === 0) {
          tempArr.push("o")
          oCount++
        }else{
          tempArr.push("x")
          xCount++
        }
      }

    }
    console.log(tempArr);
  }
  //console.log(oCount + " " + xCount);
  return ""

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(getTicTacToe(3,3));
