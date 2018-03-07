function ticTacToe(grid){
    let xo = 'xo';

    let bigWrapArr = []
    let no = 1;
    var basketO = [];
    var basketX = [];
    for(let r=0; r<grid; r++){
        let arr = []
        for(let c=0; c<grid; c++){
            let randomXO = xo.charAt(Math.floor(Math.random()*xo.length))
            if(randomXO == 'x'){
                if(basketX.length >= 4){
                    basketO.push('o')
                    arr.push('o')
                } else {
                    basketX.push('x')
                    arr.push('x')
                }
            } else {
                if(basketO.length >= 4){
                    basketX.push('x')
                    arr.push('x')
                } else {
                    basketO.push('o')
                    arr.push('o')
                }
            }
        }
        bigWrapArr.push(arr)
    }

    console.log(bigWrapArr);
    console.log('X = ' + basketX.length);
    console.log('O = ' + basketO.length);

    if(basketX.length > basketO.length){
        console.log('Pemenangnya adalah = X')
    } else {
        console.log('Pemenangnya adalah = O')
    }
}

ticTacToe(3)