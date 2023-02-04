const TotalHosts = (tmpsubnet) => {
    return 2 ** (32 - parseInt(tmpsubnet));
}

export default TotalHosts;