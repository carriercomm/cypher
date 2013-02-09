var Rot47 = function() {
	var self = this;

	var rotator = function(text, map) {
		// Generic ROT-n algorithm for keycodes in MAP.
		var R = new String();
		var i, j, c, len = map.length;
		for(i = 0; i < text.length; i++) {
			c = text.charAt(i);
			j = map.indexOf(c);
			if (j >= 0) {
				c = map.charAt((j + len / 2) % len);
			}
			R = R + c;
		}
		return R;
	};

	var rot47 = function(text) {
		return rotator(text, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~");
	}

    self.encode = function(plaintext) {
		return rot47(plaintext);
    };

    self.decode = function(encodedtext, offset) {
		return rot47(encodedtext);
    };
};

module.exports = new Rot47();
