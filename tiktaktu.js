// function random_xo() {
//     var xo = "XO";
//     return xo.substr( Math.floor(Math.random() * 2), 1);
// }
//
// function linearSearch(target, values) {
//   var hasil = 0
//   for (var i = 0; i < values.length; i++) {
//     if (values[i] === target) {
//       hasil++
//     }
//   }
//   return hasil
// }

function tic_tac_toe() {
  var arr = []
  let character = 'XO'
  let counterX = 0
  let counterO = 0

  for (var i = 0; i < 3; i++) {
    var tmp = []
    for (var j = 0; j < 3; j++) {
      // if (i === 2) {
      //   jumlahX += linearSearch('X', arr[i-1])
      //   jumlahO += linearSearch('O', arr[i-1])
      // }
      // var isi = random_xo()
      // if (jumlahX <=4 || jumlahO <=4) {
      //   tmp.push(isi)
      // }
      // if (jumlahO === 4) {
      //   tmp.push('X')
      // } else if (jumlahX === 4) {
      //   tmp.push('O')
      // }



      //
      // if (jumlahX === 5) {
      //   tmp.push('O')
      // } else if (jumlahO === 5) {
      //   tmp.push('X')
      // }
    }
    arr.push(tmp)
  }
  for (var i = 0; i < arr.length; i++) {
      while (arr[i].length < 3) {
       let random = Math.floor(Math.random() * 2)
       if (random == 0 && counterO < 5) {
         counterO += 1
         arr[i].push(' O ')

       }
       if (random == 1 && counterX < 5){
         counterX += 1
         arr[i].push(' X ')
       }
     }
   }
   return arr
}
console.log(tic_tac_toe());
