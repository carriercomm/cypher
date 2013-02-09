var RotN = function() {
	var self = this;

	var rotn = function(text, offset) {
		return text.replace(/[a-zA-Z]/g, function(c) {
			return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + offset) ? c : c - (offset*2));
		});
	};

    self.encode = function(plaintext, offset) {
		if (offset > 25 || offset < 0) {
			return null;
		}
		return rotn(plaintext, offset);
    };

    self.decode = function(encodedtext, offset) {
		if (offset > 25 || offset < 0) {
			return null;
		}
		offset = -offset;
		return rotn(encodedtext, offset);
    };
};

module.exports = new RotN();

