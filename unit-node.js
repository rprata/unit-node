var unitNode = {};

unitNode.verbose = false;
unitNode.excludePassed = false;
unitNode.excludeFailed = false;

var total = 0,
	fails = 0,
	passes = 0, 
	t0 = 0;
	t1 = 0;
	_description = "";


var _testSequence = [];

unitNode._testFailed = function(description) {
	if (description)
		_description = description;
	if (!unitNode.excludeFailed) {
		if (unitNode.verbose) {
			console.log(err);
		}
		console.log("\x1b[31m", "\t* " + _description + " - failed");
	}
	fails += 1;
}

unitNode._testPassed = function(description) {
	if (description)
		_description = description;
	if (!unitNode.excludePassed) {
		console.log("\x1b[32m", "\t* " + _description + " - passed");
	}
	passes += 1;
}

unitNode._done = function() {
	t1 = new Date().getTime();
	if (total == fails + passes)  {
		console.log("\x1b[0m", "Total: " + total + " tests. " + passes + 
			" tests have passed and " + 
			fails + " tests have failed ("+ (t1 - t0) + "ms).");
	}
};

unitNode.describe = function(description, func) {
	console.log(description);
	t0 = new Date().getTime();
	func();
	t1 = new Date().getTime();
	if (total == fails + passes)  {
		console.log("\x1b[0m", "Total: " + total + " tests. " + passes + 
			" tests have passed and " + 
			fails + " tests have failed ("+ (t1 - t0) + "ms).");
	}
};

unitNode.it = function(description, func) {
	total += 1;
	_description = description;
	func(unitNode._done);
};

unitNode.assert = {};

unitNode.assert.equal = function(arg1, arg2, description) {
	if (arg1 != arg2) {
		return unitNode._testFailed(description);
	}
	return unitNode._testPassed(description);
}

unitNode.assert.notEqual = function(arg1, arg2, description) {
	if (arg1 == arg2) {
		return unitNode._testFailed(description);
	}
	return unitNode._testPassed(description);
}

module.exports = unitNode;