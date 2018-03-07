function tactoe(jrow,jcol){
let abjad = 'XO'

 var countX=0;
 var countO=0;
  let arrPusat=[]
  for (var i = 0; i < 3; i++) {
    arrPusat.push([])
    for (var j = 0; j < 3; j++) {
      let acak = Math.floor(Math.random() * 2)
      if (acak == 0 && countX < 5){
        arrPusat[i].push(abjad[0])
        countX++
      }else if(acak==1 && countO < 5){
        arrPusat[i].push(abjad[1])
        countO++
      }else if(countX === 5 ){
        arrPusat[i].push(abjad[1])
      }else if(countO === 5){
        arrPusat[i].push(abjad[0])
      }
      //console.log(countO,countX);
    }

  }
return arrPusat
}

console.log(tactoe(3,3));
