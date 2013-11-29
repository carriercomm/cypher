var EncodeUrl = function() {
	var self = this;

    self.encode = function(plaintext) {
		return encodeURIComponent(plaintext);
    };

    self.decode = function(encodedtext) {
		return decodeURIComponent(encodedtext);
    };
};

module.exports = new EncodeUrl();

