function tic_tac_toe(row, col) {
    var xo = ["X", "O"];
    var result = [];
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    var countX = 0;
    var countO = 0;
    for (var i = 0; i < row; i++) {
        var tampung = [];
        for (var j = 0; j < col; j++) {
            var index = getRandomInt(2);
            if(countX === 5){
            index = 1;
             }else if(countO === 5){
            index = 0;
             }
            tampung.push(xo[index]);
            if(index === 0){
                countX ++;
            }else{
                countO ++;
            }
        }
        
        result.push(tampung);
    }
    return result;
}

console.log(tic_tac_toe(3, 3));