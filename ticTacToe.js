function ticTacToe(ukuran) {
  let XnO = kemungkinanXnO(ukuran);
  let arrHasil = [];
  let row;
  let index;

  for(let i = 0; i < ukuran; i++) {
    row = [];
    for(let j = 0; j < ukuran; j++) {
      index = Math.floor(Math.random() * XnO.length);
      row.push(XnO[index]);
      XnO.splice(index, 1);
    }
    arrHasil.push(row);
  }

  return arrHasil;
}

function kemungkinanXnO(ukuran) {
  let XnO = [];

  for(let i = 0; i < (ukuran*ukuran); i++) {
    if(i < ((ukuran*ukuran)/2)) {
      XnO.push("X");
    } else {
      XnO.push("O");
    }
  }

  return XnO;
}

console.log(ticTacToe(3));
