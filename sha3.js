var SHA3 = require('sha3');

var d = new SHA3.SHA3Hash(512);
d.update('');
console.log(d.digest('hex'));
