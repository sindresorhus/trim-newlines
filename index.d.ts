// Source: https://github.com/sindresorhus/type-fest/blob/main/source/internal.d.ts#L49
type Newline =
	| '\u{A}' // '\n'
	| '\u{D}' // '\r'
	;

// Source: https://github.com/sindresorhus/type-fest/blob/main/source/trim.d.ts
type TrimStart<S extends string> = S extends `${Newline}${infer R}` ? TrimStart<R> : S;

type TrimEnd<S extends string> = S extends `${infer R}${Newline}` ? TrimEnd<R> : S;

export type Trim<S extends string> = TrimStart<TrimEnd<S>>;

/**
Trim from the start and end of a string.

@example
```js
import trimNewlines from 'trim-newlines';

trimNewlines('\n🦄\r\n');
//=> '🦄'
```
*/
export function trimNewlines<S extends string>(string: S): Trim<S>;

/**
Trim from the start of a string.

@example
```js
import trimNewlines from 'trim-newlines';

trimNewlines.start('\n🦄\r\n');
//=> '🦄\r\n'
```
*/
export function trimNewlinesStart<S extends string>(string: S): TrimStart<S>;

/**
Trim from the end of a string.

@example
```js
import trimNewlines from 'trim-newlines';

trimNewlines.end('\n🦄\r\n');
//=> '\n🦄'
```
*/
export function trimNewlinesEnd<S extends string>(string: S): TrimEnd<S>;
