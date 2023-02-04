import StartIp from "./StartIp.js";
import EndIp from "./EndIp.js";
import DecimalBinary from "../ConvertBinary/DecimalBinary.js";
import PrefixBinary from "../ConvertBinary/PrefixBinary.js";

const UsableIpRange = (tmpIp, tmpSubnet) => {
    let startIp = StartIp(DecimalBinary(tmpIp), PrefixBinary(tmpSubnet)).split(".");
    let endIp = EndIp(DecimalBinary(tmpIp), PrefixBinary(tmpSubnet)).split(".");
    for(let i = 0 ; i < startIp.length ; i++) {
        if(startIp[startIp.length - i] < 255) {
            startIp[startIp.length - i] = parseInt(startIp[startIp.length - i]) + 1;
            startIp = startIp.join(".");
            break;
        }
    }
    for(let i = 0 ; i < startIp.length ; i++) {
        if(endIp[endIp.length - i] >= 0) {
            endIp[endIp.length - i] = parseInt(endIp[endIp.length - i]) - 1;
            endIp = endIp.join(".");
            break;
        }
    }
    return `${startIp} ~ ${endIp}`;
}
export default UsableIpRange;