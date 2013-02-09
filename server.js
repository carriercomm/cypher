#!/usr/bin/env node

var http =          require('http');
var express =       require('express');
var web =           express();
var server =        http.createServer(web);
var cyphers =		{
	rot13: 			require('./cyphers/rotate/13.js'),
	rotn: 			require('./cyphers/rotate/n.js'),
	rot47: 			require('./cyphers/rotate/47.js'),
	base64: 		require('./cyphers/base64.js'),
};

web.use('/', express.static('./public'));
server.listen(7000);
web.use(express.bodyParser());

require('./bundles/rotate.js')({
	cyphers: cyphers,
	web: web
});


console.log();
console.log("ROT13: Just useful for letters");

var plaintext = 'Hello there, MONKEY buttz lolz 12345';
console.log("Plain: ", plaintext);

var encoded = cyphers.rot13.encode(plaintext);
console.log("Encoded: ", encoded);

var decoded = cyphers.rot13.decode(encoded);
console.log("Decoded: ", decoded);


console.log();
console.log("ROTN(5): Also just useful for letters, although there is a ROT5 for numbers");

var plaintext2 = 'We, the PEOPLE do demand';
console.log("Plain: ", plaintext2);

var encoded2 = cyphers.rotn.encode(plaintext2, 5);
console.log("Encoded: ", encoded2);

var decoded2 = cyphers.rotn.decode(encoded2, 5);
console.log("Decoded: ", decoded2);


console.log();
console.log("ROT47: Useful for many different symbols, like URLs and emails");

var plaintext3 = "http://thomashunter.name?x=a&b=2 my E-Mail is tlhunter@gmail.com";
console.log("Plain: ", plaintext3);

var encoded3 = cyphers.rot47.encode(plaintext3);
console.log("Encoded: ", encoded3);

var decoded3 = cyphers.rot47.decode(encoded3);
console.log("Decoded: ", decoded3);


console.log();
console.log("Base64: Useful for encoding any binary data");

var plaintext4 = "http://thomashunter.name?x=a&b=2 my E-Mail is tlhunter@gmail.com";
console.log("Plain: ", plaintext4);

var encoded4 = cyphers.base64.encode(plaintext4);
console.log("Encoded: ", encoded4);

var decoded4 = cyphers.base64.decode(encoded4);
console.log("Decoded: ", decoded4);
