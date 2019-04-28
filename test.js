import test from 'ava';
import trimNewlines from '.';

test('main', t => {
	t.is(trimNewlines('\nx\n'), 'x');
	t.is(trimNewlines('\n\n\nx\n\n\n'), 'x');
	t.is(trimNewlines('\r\nx\r\n'), 'x');
	t.is(trimNewlines('\n\r\n\nx\n\r\n\n'), 'x');
});

test('start', t => {
	t.is(trimNewlines.start('\nx'), 'x');
	t.is(trimNewlines.start('\r\nx'), 'x');
	t.is(trimNewlines.start('\n\n\n\nx'), 'x');
	t.is(trimNewlines.start('\n\n\r\n\nx'), 'x');
	t.is(trimNewlines.start('x\n\n\r\n\n'), 'x\n\n\r\n\n');
});

test('end', t => {
	t.is(trimNewlines.end('x\n'), 'x');
	t.is(trimNewlines.end('x\r\n'), 'x');
	t.is(trimNewlines.end('x\n\n\n\n'), 'x');
	t.is(trimNewlines.end('x\n\n\r\n\n'), 'x');
	t.is(trimNewlines.end('\n\n\r\n\nx'), '\n\n\r\n\nx');
});
