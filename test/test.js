var http = require('http');

var unitNode = require('../unit-node.js'),
	describe = unitNode.describe,
	it = unitNode.it,
	assert = unitNode.assert;

var returnNumber = function() {
	return Math.ceil(10*Math.random());
};

var returnString = function() {
	return "String";
};

describe('It\'s an unit test example:' , function() {
	it('should be a number', function() {
		assert.equal(typeof returnNumber(), 'number');
	});

	it('should be a string', function() {
		assert.equal(typeof returnString(), 'string');
	});

	it('should be not undefined', function() {
		assert.notEqual(returnString(), undefined);
	});

	it('should be a valid address', function (done) {
		http.get({ host: 'www.google.com', path: '/'}, function(response) {
	        var body = '';
	        response.on('data', function(d) {
	            body += d;
	        });
	        response.on('end', function() {
				assert.notEqual(body, undefined, 'should be a valid address');
	            done();
	        });
		});
	});

});