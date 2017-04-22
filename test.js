import test from 'ava';
import m from '.';

test('main', t => {
	t.is(m('\nx\n'), 'x');
	t.is(m('\n\n\nx\n\n\n'), 'x');
	t.is(m('\r\nx\r\n'), 'x');
	t.is(m('\n\r\n\nx\n\r\n\n'), 'x');
});

test('start', t => {
	t.is(m.start('\nx'), 'x');
	t.is(m.start('\r\nx'), 'x');
	t.is(m.start('\n\n\n\nx'), 'x');
	t.is(m.start('\n\n\r\n\nx'), 'x');
	t.is(m.start('x\n\n\r\n\n'), 'x\n\n\r\n\n');
});

test('end', t => {
	t.is(m.end('x\n'), 'x');
	t.is(m.end('x\r\n'), 'x');
	t.is(m.end('x\n\n\n\n'), 'x');
	t.is(m.end('x\n\n\r\n\n'), 'x');
	t.is(m.end('\n\n\r\n\nx'), '\n\n\r\n\nx');
});
