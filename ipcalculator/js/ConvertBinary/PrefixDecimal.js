import DecimalBinary from "./DecimalBinary.js";
// import DecimalBinary from "../ConvertBinary/DecimalBinary.js";


const PrefixDecimal = (num) => {
    const returnBinary = [];
    let counter = 0;

    for(let i = 0 ; i < 4 ; i++) {
        let tmpBinary = [];
        for(let j = 0 ; j < 8 ; j++) {
            if(counter < num) {
                tmpBinary.push(1);
            } else {
                tmpBinary.push(0);
            }
            counter++;
        }
        returnBinary.push(tmpBinary.join(""));
    }
    return DecimalBinary(returnBinary);
}

export default PrefixDecimal;