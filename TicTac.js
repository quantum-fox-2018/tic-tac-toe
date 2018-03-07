function TicTac(num) {
  var hasil = [];
  var XO = ["X", "O"];
  var X = 0;
  var O = 0;


  for (var i = 0; i < num; i++) {
    var tmp = [];
    for (var j = 0; j < num; j++) {
      var cek = XO[Math.round(Math.random() * 1)];
      if (cek === "X" && X < 5) {
        X++;
        tmp.push("O");
      } else if (cek === "O" && O < 5) {
        O++;
        tmp.push("X");
      } else {
        tmp.push(cek);
      }
    }
    hasil.push(tmp);
  }
  return(hasil);
}

console.log(TicTac(3));
