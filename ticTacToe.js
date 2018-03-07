function boardTicTacToe(row,col) {
    let board = []

    let playerX = Math.floor((Math.random()*2)+1)
    let playerO = 0
    if(playerX == 1) {
        playerX = 4
        playerO = 5
    } else {
        playerX = 5
        playerO = 4
    }

    if(playerO > playerX) {
        console.log(`JUMLAH: Pemenangnya adalah O, dengan jumlah: ${playerO}`)
    } else {
        console.log(`JUMLAH: Pemenangnya adalah X, dengan jumlah: ${playerX}`)
    }

    for(let i=0; i<row; i++) {
        board.push([])
        for(let j=0; j<col; j++) {
            let turn = Math.floor((Math.random()*2)+1)
            if(turn == 1 && playerX >= 1) {
                board[i].push('X')
                playerX--
            } else {
                board[i].push('O')
                playerO--
            }     
        }
    }

    return board
}

console.log(boardTicTacToe(3,3))