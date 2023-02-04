const SubnetExceeption = (subnet) => {
    if(subnet < 9 || subnet >= 32) {
        alert("illegal subnet value!! change code!!");
        return false;
    }
    return true;
}

export default SubnetExceeption;