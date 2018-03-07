function game (){
    var tic_tac_toe = [
                        ['','',''],
                        ['','',''],
                        ['','','']]
    
    let turn = Math.round(Math.random()) + 1;

    let totX = 1;
    let totO = 1;
    
    // X goes first;
    if(turn === 2){
        debugger;
        while(totX<=5){
            
            let index1 = Math.floor(Math.random()*3);
            let index2 = Math.floor(Math.random()*3);

            if(tic_tac_toe[index1][index2]=== ''){
                tic_tac_toe[index1][index2] = 'X'
                totX++;
            }else{
                continue;
            }
        }
        while(totO<=4){
            
            let index1 = Math.floor(Math.random()*3);
            let index2 = Math.floor(Math.random()*3);

            if(tic_tac_toe[index1][index2] === ''){
                tic_tac_toe[index1][index2] = 'O'
                totO++;
            }else{
                continue;
            }
        }
    }//O goes first
    else if(turn === 1){
        debugger;
        while(totO<=5){
            
            let index1 = Math.floor(Math.random()*3);
            let index2 = Math.floor(Math.random()*3);

            if(tic_tac_toe[index1][index2] === ''){
                tic_tac_toe[index1][index2] = 'O'
                totO++;
            }else{
                continue;
            }
        }
        while(totX<=4){
            
            let index1 = Math.floor(Math.random()*3);
            let index2 = Math.floor(Math.random()*3);

            if(tic_tac_toe[index1][index2] === ''){
                tic_tac_toe[index1][index2] = 'X'
                totX++;
            }else{
                continue;
            }
        }
    }

    return tic_tac_toe;
}

console.log(game());