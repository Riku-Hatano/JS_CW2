import IpException from './exceptionHandling/IpException.js';
import SubnetExceeption from './exceptionHandling/SubnetException.js';
import DecimalBinary from './ConvertBinary/DecimalBinary.js';
import PrefixBinary from './ConvertBinary/PrefixBinary.js';
import StartIp from './ipChecker/StartIp.js';
import EndIp from './ipChecker/EndIp.js';
import PrefixDecimal from './ConvertBinary/PrefixDecimal.js';
import UsableIp from './ipChecker/UsableIp.js';
import TotalHosts from './ipChecker/TotalHosts.js';

const getHosts = (e) => {
    e.preventDefault();
    const tmpIp = document.getElementById("ip").value;
    const tmpSubnet = document.getElementById("subnet").value;
    //tmpip and tmpsubnet is string.
    if(IpException(tmpIp) == true && SubnetExceeption(tmpSubnet) == true) {
        console.log({
            NetworkAddress: StartIp(DecimalBinary(tmpIp), PrefixBinary(tmpSubnet)),
            BroadcastAddress: EndIp(DecimalBinary(tmpIp), PrefixBinary(tmpSubnet)),
            SubnetMask: PrefixDecimal(tmpSubnet),
            UsableHostIpRange: UsableIp(tmpIp, tmpSubnet),
            TotalNumberOfHosts: TotalHosts(),
            TotalNumberOfUsableHosts: ""
        })
    }
}

document.getElementById("getHosts").addEventListener("click", getHosts);