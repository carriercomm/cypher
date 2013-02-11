var rot13 = require('../cyphers/rotate/13.js');

module.exports = function(cargs) {
	cargs.web.get('/rotate/rot13', function(req, res) {
		res.render('templates/main.html', {
			partials: {
				body: 'forms/simple-one-way.html',
			},
			title: 'Online Rot13',
			page: {
				title: 'Rotate Text 13 Characters',
				action: '/rotate/rot13',
				api: '/api/rotate/rot13',
				content: '<p>This is an implementation of the Rot13 function. Since the english alphabet contains 26 characters, by simply offsetting them by 13 characters, the resulting text is mangled and unreadable. Since this offset is exactly half of the character set, the encryption and decryption method is exactly the same.</p>',
				strength: '<p>It is fast to calculate, easy to do on paper, and not too difficult to do in your head.</p>',
				weak: '<p>It only works on letters, you can still see word structures, numbers, special characters, and spaces.</p>',
				placeholder: "Twas brillig, and the slithy toves\nDid gyre and gimble in the wabe;\nAll mimsy were the borogoves,\nAnd the mome raths outgrabe.\n12345",
			}
		});
	});

	cargs.web.post('/rotate/rot13', function(req, res) {
		res.send(rot13.encode(req.body.plaintext));
	});

	cargs.web.post('/api/rotate/rot13', function(req, res) {
		res.send({
			cypher: "rot13",
			encoded: rot13.encode(req.body.plaintext),
			raw: req.body.plaintext
		});
	});
};
