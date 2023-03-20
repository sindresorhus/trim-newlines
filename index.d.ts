/**
Trim from the start and end of a string.

@example
```js
import trimNewlines from 'trim-newlines';

trimNewlines('\n🦄\n🦄\r\n');
//=> '🦄\n🦄'
```
*/
export function trimNewlines(string: string): string;

/**
Trim from the start of a string.

@example
```js
import trimNewlines from 'trim-newlines';

trimNewlines.start('\n🦄\r\n');
//=> '🦄\r\n'
```
*/
export function trimNewlinesStart(string: string): string;

/**
Trim from the end of a string.

@example
```js
import trimNewlines from 'trim-newlines';

trimNewlines.end('\n🦄\r\n');
//=> '\n🦄'
```
*/
export function trimNewlinesEnd(string: string): string;
