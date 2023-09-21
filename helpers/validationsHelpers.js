function checKeyOnBody(keyArray, body) {
    for(const [key, value] of Object.entries(body)) {
        if(!keyArray.includes(key)) {
            return false;
        }
    };
    return true;
};

function checRequiredKeyOnBody(keyArray, body) {
    for(const key of keyArray) {
        if(!body.hasOwnProperty(key)) {
            return key;
        }
    }
    return true;
};


module.exports = {
    checKeyOnBody,
    checRequiredKeyOnBody
}