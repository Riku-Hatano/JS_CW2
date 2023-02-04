import DecimalBinary from "../ConvertBinary/DecimalBinary.js";

const EndIp = (tmpIp, tmpSubnet) => {
    const ip = tmpIp;
    const subnet = tmpSubnet;
    let endBinaryIp = [];
    for(let i = 0 ; i < 4 ; i++) {
        let tmpEndBinaryIp = [];
        for(let j = 0 ; j < 8 ; j++) {
            if(ip[i][j] == 1 || subnet[i][j] == 0) {
                tmpEndBinaryIp.push(1);
            } else {
                tmpEndBinaryIp.push(0);
            }
        }
        endBinaryIp.push(tmpEndBinaryIp.join(""));
    }
    return DecimalBinary(endBinaryIp)
}

export default EndIp;