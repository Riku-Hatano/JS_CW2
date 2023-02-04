const IpException = (ip) => {
    //blocking illegal value here
    //blocking vacant string
    if(ip == "") {
        alert("enter value!!");
        return false;
    }
    //blocking illegal value like alphabet 
    let ipBox = [];
    for(let i = 0 ; i < ip.length ; i++) {
        if(ip[i].charCodeAt() >= 48 && ip[i].charCodeAt() <= 57 || ip[i].charCodeAt() == 46) {
            ipBox.push(ip[i]);
        } else {
            console.log(`illegal value ${ip[i].charCodeAt()}`);
            alert("your ip address contains illegal character!!");
            return false;
        }
    }
    //blocking illegal octed number. 192.168.1 would be rejected because it has only three octeds.
    ipBox = ipBox.join("").split(".")
    if(ipBox.length !== 4) {
        console.log(`illegal octed number ${ipBox}`);
        alert("illegal ip address. check digits!!");
        return false;
    }
    //blocking illegal ip address more than 255.
    for(let i = 0 ; i < ipBox.length ; i++) {
        if(parseInt(ipBox[i]) > 255) {
            console.log(`illegal ip number more than 255 ${ipBox[i]}`);
            alert("illegal ip address. the number shouldn't be more than 255!!")
            return false;
        }
    }

    return true;
}

export default IpException;
