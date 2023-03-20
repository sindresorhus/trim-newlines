import test from 'ava';
import {trimNewlines, trimNewlinesStart, trimNewlinesEnd} from './index.js';

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
	t.is(trimNewlinesStart(''), '');
	t.is(trimNewlinesStart('  '), '  ');
	t.is(trimNewlinesStart('\n\n\r'), '');
	t.is(trimNewlinesStart('\nx'), 'x');
	t.is(trimNewlinesStart('\r\nx'), 'x');
	t.is(trimNewlinesStart('\n\n\n\nx'), 'x');
	t.is(trimNewlinesStart('\n\n\r\n\nx'), 'x');
	t.is(trimNewlinesStart('x\n\n\r\n\n'), 'x\n\n\r\n\n');
});

test('end', t => {
	t.is(trimNewlinesEnd(''), '');
	t.is(trimNewlinesEnd('  '), '  ');
	t.is(trimNewlinesEnd('\n\n\r'), '');
	t.is(trimNewlinesEnd('x\n'), 'x');
	t.is(trimNewlinesEnd('x\r\n'), 'x');
	t.is(trimNewlinesEnd('x\n\n\n\n'), 'x');
	t.is(trimNewlinesEnd('x\n\n\r\n\n'), 'x');
	t.is(trimNewlinesEnd('\n\n\r\n\nx'), '\n\n\r\n\nx');
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
		trimNewlinesStart(string);
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
		trimNewlinesEnd(string);
		const difference = Date.now() - start;
		t.true(difference < 10, `Execution time: ${difference}`);

		if (difference > 10) {
			throw new Error(); // eslint-disable-line unicorn/error-message
		}
	}
});
