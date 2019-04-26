function createTicTacToe(Row,Col) {

    let maxValue = Row * Col;
    let maxPoint = Math.ceil((Row*Col)/2);
    // console.log(maxValue); // 5
    let pointX = 0;
    let pointO = 0;

    let arrBoard = []
    for (let i = 0; i < Row; i++) {
        arrBoard.push([]);
        for (let j = 0; j < Col; j++) {
            /////
            let alpha = 'OX';
            let createRandom = Math.round(Math.random());

            if (pointO >= maxPoint) {
                arrBoard[i].push('X');
                pointX++;
            } else if (pointX >= maxPoint) {
                arrBoard[i].push('O');
                pointO++;
            } else {
                arrBoard[i].push(alpha[createRandom]);
                if(createRandom == 0) {
                    pointO++
                } else {
                    pointX++
                }     
            }
        }
    }

    console.log('pointO',pointO);
    console.log('pointX',pointX);
    console.log(arrBoard);

    if (pointO >= maxPoint) {
        console.log(`Pemenangnya adalah O`)
    } else {
        console.log(`Pemenangnya adalah X`)
    }

}

createTicTacToe(3,3);