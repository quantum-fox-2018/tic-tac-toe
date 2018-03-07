function xMove(board, dimensi, turn){
    let countX = 0;
    while(countX<4+turn){
        let index1 = Math.floor(Math.random()*dimensi);
        let index2 = Math.floor(Math.random()*dimensi);
        if(board[index1][index2] === ''){
            board[index1][index2] = 'X'
            countX++;
        }else {
            continue;
        }
    }
    return board;
}

function oMove(board, dimensi, turn){
    let countO = 0;
    while(countO<4+turn){
        let index1 = Math.floor(Math.random()*dimensi);
        let index2 = Math.floor(Math.random()*dimensi);
        if(board[index1][index2] === ''){
            board[index1][index2] = 'O'
            countO++;
        }else {
            continue;
        }
    }
    return board;
}

function game(dimensi){
    //Create the board
    let mainBoard = [];
    let insideBoard = [];
    for(let counter=0; counter<dimensi; counter++){
        insideBoard = [];
        for(let counter2=0; counter2<dimensi; counter2++){
            insideBoard.push('');
        }
        mainBoard.push(insideBoard);
    }

    //Decide who's turn
    let turn = Math.round(Math.random()); 
    
    //X goes first
    if(turn===1){
        mainBoard = xMove(mainBoard, dimensi, turn);
        mainBoard = oMove(mainBoard, dimensi, turn-1);
    }else{
        mainBoard = oMove(mainBoard, dimensi, turn+1);
        mainBoard = xMove(mainBoard, dimensi, turn);
    }
    return mainBoard;
}

console.log(game(3));