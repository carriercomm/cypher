var url_cypher = require('../cyphers/encode/url.js');

module.exports = function(cargs) {
	cargs.web.get('/encode/url', function(req, res) {
		res.render('templates/main.html', {
			partials: {
				body: 'forms/urlencode.html',
			},
			title: 'Online URL Encode'
		});
	});

	cargs.web.post('/encode/url/encode', function(req, res) {
		res.send(url_cypher.encode(req.body.input));
	});

	cargs.web.post('/encode/url/decode', function(req, res) {
		res.send(url_cypher.decode(req.body.input));
	});

	cargs.web.post('/api/encode/url/encode', function(req, res) {
		res.send({
			cypher: "urlencode",
			output: url_cypher.encode(req.body.input),
			raw: req.body.input
		});
	});

	cargs.web.post('/api/encode/url/decode', function(req, res) {
		console.log(req.body.input);
		res.send({
			cypher: "urlencode",
			output: url_cypher.decode(req.body.input),
			raw: req.body.input
		});
	});
};
