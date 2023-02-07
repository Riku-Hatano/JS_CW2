const BinaryDecimal = (num) => {
    if(typeof(num) !== "string") { //if this function receive array, it will return the string of decimal value.
        let returnDecimal = [];
        for(let i = 0 ; i < 4 ; i++) {
            let tmpDecimal = 0;
            for(let j = 0 ; j < 8 ; j++) {
                if(num[i][j] == 1) {
                    tmpDecimal += 2**(7 - j);
                }
            }
            returnDecimal.push(tmpDecimal);
        }
        returnDecimal = returnDecimal.join(".");
        return returnDecimal;
    } else {
        let returnDecimal = 0;
        for(let i = 0 ; i < 8 ; i++) {
            console.log(num)
            if(num[i] == 1) {
                returnDecimal += 2**(7 - i);
            }
        }
        console.log(returnDecimal)
        return returnDecimal;
    }
}

export default BinaryDecimal;