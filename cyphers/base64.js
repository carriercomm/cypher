var Base64 = function() {
	var self = this;

    self.encode = function(plaintext) {
		return new Buffer(plaintext).toString('base64')
    };

    self.decode = function(encodedtext) {
		return new Buffer(encodedtext, 'base64').toString('ascii')
    };
};

module.exports = new Base64();
