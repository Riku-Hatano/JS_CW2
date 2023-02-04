const TotalUsableHosts = (tmpsubnet) => {
    return 2 ** (32 - parseInt(tmpsubnet)) - 2;

}

export default TotalUsableHosts;