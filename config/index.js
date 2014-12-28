var env = process.env.NODE_ENV || "development";

var defaults = {
	development: {
		port: 8000
	},
	test: {
		port: 8000
	},
	production: {
		port: 8000
	}
};

module.exports = defaults[env];