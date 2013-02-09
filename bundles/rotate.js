module.exports = function(cargs) {
	cargs.web.get('/rotate/rot13', function(req, res) {
		res.send(cargs.cyphers.rot13.encode('hello'));
	});

	cargs.web.post('/rotate/rot13', function(req, res) {
		res.send(cargs.cyphers.rot13.encode(req.body.text));
	});

	cargs.web.post('/api/rotate/rot13', function(req, res) {
		res.send({
			cypher: "rot13",
			encoded: cargs.cyphers.rot13.encode(req.body.text),
			raw: req.body.text
		});
	});
};
