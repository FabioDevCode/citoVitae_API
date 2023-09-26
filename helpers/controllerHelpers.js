function clearObjAfterCreate(obj) {
    const new_obj = {...obj._doc};
    delete new_obj.__v;
    delete new_obj.uid;
    return new_obj;
}


module.exports = {
    clearObjAfterCreate
}