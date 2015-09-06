'use strict';
var test = require('ava');
var readChunk = require('read-chunk');
var isPostscript = require('../');

function check(filename) {
	return isPostscript(readChunk.sync(filename, 0, 2));
}

test(function (t) {
	t.false(check('test/fixture/fixture.mp4'));
	t.true(check('test/fixture/fixture.ps'));

	t.end();
});
