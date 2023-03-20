import test from 'ava';
import trimNewlines from './index.js';

test('main', t => {
	t.is(trimNewlines(''), '');
	t.is(trimNewlines('  '), '  ');
	t.is(trimNewlines('\n\n\r'), '');
	t.is(trimNewlines('\nx\n'), 'x');
	t.is(trimNewlines('\n\n\nx\n\n\n'), 'x');
	t.is(trimNewlines('\r\nx\r\n'), 'x');
	t.is(trimNewlines('\n\r\n\nx\n\r\n\n'), 'x');
});

test('start', t => {
	t.is(trimNewlines.start(''), '');
	t.is(trimNewlines.start('  '), '  ');
	t.is(trimNewlines.start('\n\n\r'), '');
	t.is(trimNewlines.start('\nx'), 'x');
	t.is(trimNewlines.start('\r\nx'), 'x');
	t.is(trimNewlines.start('\n\n\n\nx'), 'x');
	t.is(trimNewlines.start('\n\n\r\n\nx'), 'x');
	t.is(trimNewlines.start('x\n\n\r\n\n'), 'x\n\n\r\n\n');
});

test('end', t => {
	t.is(trimNewlines.end(''), '');
	t.is(trimNewlines.end('  '), '  ');
	t.is(trimNewlines.end('\n\n\r'), '');
	t.is(trimNewlines.end('x\n'), 'x');
	t.is(trimNewlines.end('x\r\n'), 'x');
	t.is(trimNewlines.end('x\n\n\n\n'), 'x');
	t.is(trimNewlines.end('x\n\n\r\n\n'), 'x');
	t.is(trimNewlines.end('\n\n\r\n\nx'), '\n\n\r\n\nx');
});

test('main - does not have exponential performance', t => {
	for (let index = 0; index < 45_000; index += 1000) {
		const string = 'a' + String(Array.from({length: index}).fill('\n').join('')) + String(Array.from({length: index}).fill('\n').join('')) + 'a';
		const start = Date.now();
		trimNewlines(string);
		const difference = Date.now() - start;
		t.true(difference < 10, `Execution time: ${difference}`);

		if (difference > 10) {
			throw new Error(); // eslint-disable-line unicorn/error-message
		}
	}
});

test('start - does not have exponential performance', t => {
	for (let index = 0; index < 45_000; index += 1000) {
		const string = 'a' + String(Array.from({length: index}).fill('\n').join(''));
		const start = Date.now();
		trimNewlines.start(string);
		const difference = Date.now() - start;
		t.true(difference < 10, `Execution time: ${difference}`);

		if (difference > 10) {
			throw new Error(); // eslint-disable-line unicorn/error-message
		}
	}
});

test('end - does not have exponential performance', t => {
	for (let index = 0; index < 45_000; index += 1000) {
		const string = String(Array.from({length: index}).fill('\n').join('')) + 'a';
		const start = Date.now();
		trimNewlines.end(string);
		const difference = Date.now() - start;
		t.true(difference < 10, `Execution time: ${difference}`);

		if (difference > 10) {
			throw new Error(); // eslint-disable-line unicorn/error-message
		}
	}
});
