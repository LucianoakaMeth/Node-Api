function info(text){
    console.log('INFO:', text);
    return text;
}
function error(text){
    console.log('ERROR:', text);
    return text;
}

module.exports.error = error;
module.exports.info = info;

//module.exports = { info, error };