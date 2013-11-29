var rot13 = require('../cyphers/rotate/13.js');

module.exports = function(cargs) {
	cargs.web.get('/rotate/rot13', function(req, res) {
		res.render('templates/main.html', {
			partials: {
				body: 'forms/rot13.html',
			},
			title: 'Online Rot13'
		});
	});

	cargs.web.post('/rotate/rot13', function(req, res) {
		res.send(rot13.encode(req.body.input));
	});

	cargs.web.post('/api/rotate/rot13', function(req, res) {
		res.send({
			cypher: "rot13",
			output: rot13.encode(req.body.input),
			raw: req.body.input
		});
	});
};
