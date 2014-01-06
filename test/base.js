'use strict';

var should = require('should');

var Pragma = require('.././src');

describe('Pragma base', function () {
	beforeEach(function (done) {
		done();
	});

	it('is fine (:', function () {
		var fruit = { name: 'banana' }
		fruit.should.have.property('name', 'banana');
	});
});
