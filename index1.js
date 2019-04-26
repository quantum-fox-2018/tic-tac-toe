function createTicTacToe(Row,Col) {

    let maxValue = Row * Col;
    let maxPoint = Math.ceil((Row*Col)/2);
    
    let pointX = 0;
    let pointO = 0;

    let arrBoard = []
    for (let i = 0; i < Row; i++) {
        arrBoard.push(['\n']);
        for (let j = 0; j < Col; j++) {
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

    
    var arrStart = [
        {
            name: 'O',
            point: 0
        }, {
            name: 'X',
            point: 0
        }
    ]

    //DRIVE CODE 1
    // arrBoard.push(['X','O','O'])
    // arrBoard.push(['X','X','O'])
    // arrBoard.push(['O','O','X'])

    console.log(arrBoard);
    // console.log('before',arrStart);

    // TEST BARIS
    for (let h = 0; h < arrBoard.length; h++) {
        for (let i = 0; i < arrBoard[h].length-1; i++) {
            if (arrBoard[h][i] == arrBoard[h][i+1]) {
                // TAMBAHIN POIN KE OBJ START
                for (let j = 0; j < arrStart.length; j++) {
                    if (arrBoard[h][i] == arrStart[j].name) {
                        arrStart[j].point += 1;
                    }
                }
            }
            // console.log('Col' + i);
            // console.log('Row' + h);
            // console.log(arrStart); 
            //RETURN MENANG
            if (arrStart[0].point >= 2) {
                return `Selamat ! ${arrStart[0].name} menang !`;
            } else if (arrStart[1].point >= 2) {
                return `Selamat ! ${arrStart[1].name} menang !`;
            }   
        }
        //RESET NILAI 
        for (let k = 0; k < arrStart.length; k++) {
            arrStart[k].point = 0;
        }
    }

    // console.log('after check baris',arrStart);

    // TEST KOLOM
    for (let h = 0; h < arrBoard.length; h++) {
        for (let i = 0; i < arrBoard.length-1; i++) {
            if (arrBoard[i][h] == arrBoard[i+1][h]) {
                // TAMBAHIN POIN KE OBJ START
                for (let j = 0; j < arrStart.length; j++) {
                    if (arrBoard[i][h] == arrStart[j].name) {
                        arrStart[j].point += 1;
                    }
                }
            }
            //RETURN MENANG
            if (arrStart[0].point >= 2) {
                return `Selamat ! ${arrStart[0].name} menang !`;
            } else if (arrStart[1].point >= 2) {
                return `Selamat ! ${arrStart[1].name} menang !`;
            }
        }
        //RESET NILAI 
        for (let k = 0; k < arrStart.length; k++) {
            arrStart[k].point = 0;
        }
    }

    // console.log('after check kolom',arrStart);

    // TEST DIAGONAL BAWAH
    if (arrBoard[arrBoard.length-1][arrBoard.length-3] == arrBoard[arrBoard.length-2][arrBoard.length-2]) {
        for (let j = 0; j < arrStart.length; j++) {
            if (arrBoard[arrBoard.length-1][arrBoard.length-3] == arrStart[j].name) {
                arrStart[j].point += 1;
            }
        }
    }
    if (arrBoard[arrBoard.length-2][arrBoard.length-2] == arrBoard[arrBoard.length-3][arrBoard.length-1]) {
        for (let j = 0; j < arrStart.length; j++) {
            if (arrBoard[arrBoard.length-2][arrBoard.length-2] == arrStart[j].name) {
                arrStart[j].point += 1;
            }
        }
    }
    //RETURN MENANG
    if (arrStart[0].point >= 2) {
        return `Selamat ! ${arrStart[0].name} menang !`;
    } else if (arrStart[1].point >= 2) {
        return `Selamat ! ${arrStart[1].name} menang !`;
    }
    //RESET NILAI DIAGONAL BAWAH
    for (let k = 0; k < arrStart.length; k++) {
        arrStart[k].point = 0;
    }
    // console.log('check diagonal bawah',arrStart);
    
    // TEST DIAGONAL ATAS
    if (arrBoard[arrBoard.length-3][arrBoard.length-3] == arrBoard[arrBoard.length-2][arrBoard.length-2]) {
        for (let j = 0; j < arrStart.length; j++) {
            if (arrBoard[arrBoard.length-3][arrBoard.length-3] == arrStart[j].name) {
                arrStart[j].point += 1;
            }
        }
    }
    if (arrBoard[arrBoard.length-2][arrBoard.length-2] == arrBoard[arrBoard.length-1][arrBoard.length-1]) {
        for (let j = 0; j < arrStart.length; j++) {
            if (arrBoard[arrBoard.length-2][arrBoard.length-2] == arrStart[j].name) {
                arrStart[j].point += 1;
            }
        }
    }
     //RETURN MENANG
     if (arrStart[0].point >= 2) {
        return `Selamat ! ${arrStart[0].name} menang !`;
    } else if (arrStart[1].point >= 2) {
        return `Selamat ! ${arrStart[1].name} menang !`;
    }
    //RESET NILAI DIAGONAL ATAS
    for (let k = 0; k < arrStart.length; k++) {
        arrStart[k].point = 0;
    }
    // console.log('check diagonal atas',arrStart);

    return `Maaf ! Tidak ada yang menang !`;

}

console.log(createTicTacToe(3,3));

