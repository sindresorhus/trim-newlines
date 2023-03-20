// Source: https://github.com/sindresorhus/type-fest/blob/main/source/internal.d.ts#L49
type Whitespace =
	| '\u{9}' // '\t'
	| '\u{A}' // '\n'
	| '\u{B}' // '\v'
	| '\u{C}' // '\f'
	| '\u{D}' // '\r'
	| '\u{20}' // ' '
	| '\u{85}'
	| '\u{A0}'
	| '\u{1680}'
	| '\u{2000}'
	| '\u{2001}'
	| '\u{2002}'
	| '\u{2003}'
	| '\u{2004}'
	| '\u{2005}'
	| '\u{2006}'
	| '\u{2007}'
	| '\u{2008}'
	| '\u{2009}'
	| '\u{200A}'
	| '\u{2028}'
	| '\u{2029}'
	| '\u{202F}'
	| '\u{205F}'
	| '\u{3000}'
	| '\u{FEFF}';

// Source: https://github.com/sindresorhus/type-fest/blob/main/source/trim.d.ts
type TrimStart<S extends string> = S extends `${Whitespace}${infer R}` ? TrimStart<R> : S;

type TrimEnd<S extends string> = S extends `${infer R}${Whitespace}` ? TrimEnd<R> : S;

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
