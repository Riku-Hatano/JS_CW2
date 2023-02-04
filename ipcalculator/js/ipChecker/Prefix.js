const Prefix = (tmpIp, tmpHosts) => {
    tmpHosts = parseInt(tmpHosts);
    let prefix;
    for(let i = 0 ; i < 32 ; i++) {
        if(2 ** (i + 1) > tmpHosts) {
            prefix = 32 - (i + 1);
            return prefix;
        }
    }
}

export default Prefix;