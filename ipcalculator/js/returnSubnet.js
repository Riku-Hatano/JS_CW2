import IpException from "./exceptionHandling/IpException.js";
import Prefix from "./ipChecker/Prefix.js";
import DecimalBinary from "./ConvertBinary/DecimalBinary.js";
import PrefixBinary from "./ConvertBinary/PrefixBinary.js";
import StartIp from "./ipChecker/StartIp.js";
import EndIp from "./ipChecker/EndIp.js";
import PrefixDecimal from "./ConvertBinary/PrefixDecimal.js";
import UsableIpRange from "./ipChecker/UsableIpRange.js";
import BlockSize from "./ipChecker/BlockSize.js";

const returnSubnet = (e) => {
    e.preventDefault();
    const tmpIp = document.getElementById("ip2").value; 
    const tmpHosts = document.getElementById("hosts").value;
    if(IpException(tmpIp) == true && tmpHosts < 4294967296) { //4294967296 is the number of host when there were no subnets. this value is 2**32
        console.log({
            prefix: Prefix(tmpIp, tmpHosts),
            subnetmask: DecimalBinary(PrefixBinary(Prefix(tmpIp, tmpHosts))),
            NetworkAddress: StartIp(DecimalBinary(tmpIp), PrefixBinary(Prefix(tmpIp, tmpHosts))),
            BroadcastAddress: EndIp(DecimalBinary(tmpIp), PrefixBinary(Prefix(tmpIp, tmpHosts))),
            SubnetMask: PrefixDecimal(Prefix(tmpIp, tmpHosts)),
            UsableHostIpRange: UsableIpRange(tmpIp, Prefix(tmpIp, tmpHosts)),
            PossibleIPs: BlockSize(tmpIp, Prefix(tmpIp, tmpHosts))
        })
    }
}

document.getElementById("returnSubnet").addEventListener("click", returnSubnet);