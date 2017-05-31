# unit-node
A simple unit test API for nodejs.

## Getting Started

```
npm install unit-node@latest --save-dev
```

## Usage
Here is an example using unit-node:

```
var unitNode = require('unit-node'),
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

});
```

## License
IButterFree may be modified and distributed under the terms of the MIT license. See the LICENSE file for details.