const DecimalBinary = (num) => {
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
    } else { // if this function receive string, this will return the array of binary.
        let tmpDecimal = num.split(".");
        let returnBinary = [];
        for(let i = 0 ; i < tmpDecimal.length ; i++) {
            let currentTmpDecimal = parseInt(tmpDecimal[i]);
            let tmpBinaryOcted = [];
            for(let j = 0 ; j < 8 ; j++) {
                tmpBinaryOcted.unshift(currentTmpDecimal % 2);
                currentTmpDecimal = Math.floor(currentTmpDecimal / 2);
            }
            returnBinary.push(tmpBinaryOcted.join(""));
        }
        return returnBinary;
        //return value would be four octeds whose validation is array of string.
    }
}

export default DecimalBinary;