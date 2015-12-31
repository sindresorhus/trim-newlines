import test from 'ava';
import fn from './';

test('main', t => {
	t.is(fn('\nx\n'), 'x');
	t.is(fn('\n\n\nx\n\n\n'), 'x');
	t.is(fn('\r\nx\r\n'), 'x');
	t.is(fn('\n\r\n\nx\n\r\n\n'), 'x');
});

test('start', t => {
	t.is(fn.start('\nx'), 'x');
	t.is(fn.start('\r\nx'), 'x');
	t.is(fn.start('\n\n\n\nx'), 'x');
	t.is(fn.start('\n\n\r\n\nx'), 'x');
	t.is(fn.start('x\n\n\r\n\n'), 'x\n\n\r\n\n');
});

test('end', t => {
	t.is(fn.end('x\n'), 'x');
	t.is(fn.end('x\r\n'), 'x');
	t.is(fn.end('x\n\n\n\n'), 'x');
	t.is(fn.end('x\n\n\r\n\n'), 'x');
	t.is(fn.end('\n\n\r\n\nx'), '\n\n\r\n\nx');
});
