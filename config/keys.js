//keys.js -- figure out what set of credentials to return
if(process.env.NODE_ENV === 'production'){
    //we are in production- return prod set of keys
    module.exports = require('./prod');
    console.log('prod env');
}else{
    // we are in dev - return dev set of keys
    module.exports = require('./dev');
    console.log('dev env');
}