'use strict';
var test = require('ava');
var readChunk = require('read-chunk');
var isPostscript = require('../');

function check(filename) {
	return isPostscript(readChunk.sync(filename, 0, 2));
}

test(function (t) {
	t.assert(!check('test/fixture/fixture.mp4'));
	t.assert(check('test/fixture/fixture.ps'));
});
