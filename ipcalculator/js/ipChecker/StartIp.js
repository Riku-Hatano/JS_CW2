import DecimalBinary from "../ConvertBinary/DecimalBinary.js";

const StartIp = (tmpIp, tmpSubnet) => {
    const ip = tmpIp;
    const subnet = tmpSubnet;
    let startBinaryIp = [];
    for(let i = 0 ; i < 4 ; i++) {
        let tmpStartBinaryIp = [];
        for(let j = 0 ; j < 8 ; j++) {
            if(ip[i][j] == 1 && subnet[i][j] == 1) {
                tmpStartBinaryIp.push(1);
            } else {
                tmpStartBinaryIp.push(0);
            }
        }
        startBinaryIp.push(tmpStartBinaryIp.join(""));
    }
    return DecimalBinary(startBinaryIp)
}

export default StartIp;