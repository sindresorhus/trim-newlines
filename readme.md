# trim-newlines

> Trim [newlines](https://en.wikipedia.org/wiki/Newline) from the start and/or end of a string

Looking to trim all whitespace, not just newlines? Use `String#trim()`, `String#trimStart()`, or `String#trimEnd()`.

## Install

```
$ npm install trim-newlines
```

## Usage

```js
import {trimNewlines, trimNewlinesStart, trimNewlinesEnd} from 'trim-newlines';

trimNewlines('\n🦄\n🦄\r\n');
//=> '🦄\n🦄'

trimNewlinesStart('\n🦄\r\n');
//=> '🦄\r\n'

trimNewlinesEnd('\n🦄\r\n');
//=> '\n🦄'
```

## API

### trimNewlines(string)

Trim from the start and end of a string.

### trimNewlinesStart(string)

Trim from the start of a string.

### trimNewlinesEnd(string)

Trim from the end of a string.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-trim-newlines?utm_source=npm-trim-newlines&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
