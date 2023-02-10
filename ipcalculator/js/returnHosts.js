import IpException from './exceptionHandling/IpException.js';
import SubnetExceeption from './exceptionHandling/SubnetException.js';
import DecimalBinary from './ConvertBinary/DecimalBinary.js';
import PrefixBinary from './ConvertBinary/PrefixBinary.js';
import StartIp from './ipChecker/StartIp.js';
import EndIp from './ipChecker/EndIp.js';
import PrefixDecimal from './ConvertBinary/PrefixDecimal.js';
import UsableIpRange from './ipChecker/UsableIpRange.js';
import TotalHosts from './ipChecker/TotalHosts.js';
import TotalUsableHosts from './ipChecker/TotalUsableHosts.js';
import BlockSize from './ipChecker/BlockSize.js';
import createDom from './createDom.js';

const getHosts = (e) => {
    e.preventDefault();
    const tmpIp = document.getElementById("ip").value;
    const tmpSubnet = document.getElementById("subnet").value;
    //tmpip and tmpsubnet is string.
    if(IpException(tmpIp) == true && SubnetExceeption(tmpSubnet) == true) {
        let returns = ({
            NetworkAddress: StartIp(DecimalBinary(tmpIp), PrefixBinary(tmpSubnet)),
            BroadcastAddress: EndIp(DecimalBinary(tmpIp), PrefixBinary(tmpSubnet)),
            SubnetMask: PrefixDecimal(tmpSubnet),
            UsableHostIpRange: UsableIpRange(tmpIp, tmpSubnet),
            TotalNumberOfHosts: TotalHosts(tmpSubnet),
            TotalNumberOfUsableHosts: TotalUsableHosts(tmpSubnet),
            PossibleIPs: BlockSize(tmpIp, tmpSubnet)
        })
        createDom(returns)
    }
}

document.getElementById("getHosts").addEventListener("click", getHosts);