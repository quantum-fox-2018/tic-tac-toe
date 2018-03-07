//Tic Tac Toe

function ticTacToe(){
    let counterX = 0;
    let counterO = 0;
    let XorO = ['X', 'O'];
    let arrResults = [];

    for(let i = 0; i < 3; i++){

        let tempXO = [];
        for(let j = 0; j < 3; j++){
            let randomXO = Math.round(Math.random());

            if(randomXO === 0){
                counterX += 1;
                if(counterX > 5){
                    randomXO = 1;
                    counterX -= 1
                }else {
                    randomXO = 0;
                }
            }else{
                counterO += 1;
                if(counterO > 5){
                    randomXO = 0;
                    counterX -= 1
                }else {
                    randomXO = 1;
                }
            }

            //console.log(randomXO);
            tempXO.push(XorO[randomXO]);
        }

        arrResults.push(tempXO);
    }

    console.log(arrResults);
}


ticTacToe();
