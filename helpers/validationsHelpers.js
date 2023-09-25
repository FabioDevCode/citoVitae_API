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

function UrlValidator(url) {
    const domainUrl = new RegExp('^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$', 'g');
    if(!domainUrl.test(url)) {
        return false;
    }
    return true;
};


module.exports = {
    checKeyOnBody,
    checRequiredKeyOnBody,
    UrlValidator
}