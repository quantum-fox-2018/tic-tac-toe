function ticTacToe(input){
    let result = []
    let countX = 0
    let countO = 0
    let random = Math.round(Math.random())

    for(let i=0; i<input; i++){
        result.push([])
        for(let j=0; j<input; j++){
            if(countX <= input){
                countX ++
                result[i].push('X')
            }
            else if(countO <= input){
                countO ++
                result[i].push('O')
            }
            else{
                if(random == 1){
                    countO ++
                    result[i].push('O')
                }
                else if(random == 0){
                    countX ++
                    result[i].push('X')
                }
            }
        }
        
    }
    // console.log(countO)
    console.log(result)
    
    if(countX > countO){
        console.log('Pemenangnya adalah : X ')
    }
    else{
        console.log('Pemenangnya adalah : O ')
    }
}

ticTacToe(3)