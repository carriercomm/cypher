module.exports = function(cargs) {
  cargs.web.get('/', function(req, res) {
	res.render('templates/main.html', {
	  partials: {
		body: 'index.html',
	  },
	  title: 'Online Encryption, Encoding, Hashing',
	});
  });
};
