var assert = require('assert');

var unitNode = {};

unitNode.verbose = false;
unitNode.excludePassed = false;
unitNode.excludeFailed = false;

var total = 0,
	fails = 0,
	passes = 0;

unitNode.describe = function(description, func) {
	console.log(description);
	func();
	console.log("\x1b[0m", "Total: " + total + " tests. " + passes + 
		" tests have passed and " + 
		fails + " tests have failed.");
};

unitNode.it = function(description, func) {
	total += 1;
	try {
		func();
		if (!unitNode.excludePassed) {
			console.log("\x1b[32m", "\t* " + description + " - passed");
		}
		passes += 1;

	} catch (err) {
		if (!unitNode.excludeFailed) {
			if (unitNode.verbose) {
				console.log(err);
			}
			console.log("\x1b[31m", "\t* " + description + " - failed");
		}
		fails += 1
	}
};

unitNode.assert = assert;

module.exports = unitNode;