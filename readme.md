# trim-newlines

> Trim [newlines](https://en.wikipedia.org/wiki/Newline) from the start and/or end of a string

Looking to trim all whitespace, not just newlines? Use `String#trim()`, `String#trimStart()`, or `String#trimEnd()`.

## Install

```sh
npm install trim-newlines
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
