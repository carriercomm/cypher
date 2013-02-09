var Rot13 = function() {
	var self = this;

	var rot13 = function(text) {
		return text.replace(/[a-zA-Z]/g, function(c) {
			return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
		});
	};

    self.encode = function(plaintext) {
		return rot13(plaintext);
    };

    self.decode = function(encodedtext) {
		return rot13(encodedtext);
    };
};

module.exports = new Rot13();
