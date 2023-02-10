import PrefixDecimal from "../ConvertBinary/PrefixDecimal.js";
import UsableIpRange from "./UsableIpRange.js";

const BlockSize = (tmpIp, tmpSubnet) => {
    // if(tmpSubnet == "8" || tmpSubnet == "16" || tmpSubnet == "24") {
    //     return false;
    // }
    const returnIPs = [];
    let bs = 0;
    let bsCount = 0;
    let interesting = 0;
    if(parseInt(tmpSubnet) <= 8) {
        bs = 256 - parseInt(PrefixDecimal(tmpSubnet).split(".")[0]);
        interesting = 0
    } else if (parseInt(tmpSubnet) <= 16) {
        bs = 256 - parseInt(PrefixDecimal(tmpSubnet).split(".")[1]);
        interesting = 1
    } else if (parseInt(tmpSubnet) <= 24) {
        bs = 256 - parseInt(PrefixDecimal(tmpSubnet).split(".")[2]);
        interesting = 2
    } else if (parseInt(tmpSubnet) <= 32) {
        bs = 256 - parseInt(PrefixDecimal(tmpSubnet).split(".")[3]);
        interesting = 3
    } else {
        return "illegal prefix!!";
    }
    while(bsCount < 256) {
        bsCount += bs;
        let separatedIp = tmpIp.split(".");
        separatedIp[interesting] = bsCount.toString();
        separatedIp = separatedIp.join(".");
        returnIPs.push(UsableIpRange(separatedIp, tmpSubnet))
    }
    returnIPs.unshift(returnIPs[returnIPs.length - 1])
    returnIPs.pop();
    return returnIPs
}

export default BlockSize;