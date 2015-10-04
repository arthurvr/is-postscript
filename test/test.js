import test from 'ava';
import readChunk from 'read-chunk';
import isPostscript from '../';

function check(filename) {
	return isPostscript(readChunk.sync(filename, 0, 2));
}

test(t => {
	t.false(check('test/fixture/fixture.mp4'));
	t.true(check('test/fixture/fixture.ps'));

	t.end();
});
