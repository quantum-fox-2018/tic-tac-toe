function ticTacToe (row,column) {

    var result = []
    var pion = ['x','o']
    var counterX = 0
    var counterO = 0

    function randomNum (num) {

        return Math.floor(Math.random() * Math.floor(num))
    }

    for (var i = 0; i < row; i++) {
        
        var boards = []
        for (var j = 0; j < column; j++) {
        var index = randomNum(2)
        
            if (counterX === 5) {

                index = 1
            } else if (counterO === 5) {

                index = 0
            }

            boards.push(pion[index])

            if (index === 0) {

                counterX ++
            } else if (index === 1) {

                counterO ++
            }

        }//end of column

        result.push(boards)

    }//end of row

    console.log(result)
}

ticTacToe(3,3)