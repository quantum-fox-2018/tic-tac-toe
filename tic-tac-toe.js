function ticTacToe() {
    var board = 3;
    var boardArr = [];
    var countX = 0;
    var countO = 0;
    
    for (var i = 0; i < board; i++) {
        var temp = [];
        var random = Math.floor(Math.random() * 2);
        for (var j = 0; j < board; j++) {
            if (random === 0 && countX < 5 || countO === 5) { 
                temp.push('X');
                countX++;
            } else {
                if (random === 1 && countO < 5 || countX === 5) {
                    temp.push('O');
                    countO++;
                }
            }
        }

        boardArr.push(temp);
    }

    return boardArr;
}

console.log(ticTacToe())