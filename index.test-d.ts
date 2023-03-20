import {expectType, expectAssignable} from 'tsd';
import {trimNewlines, trimNewlinesStart, trimNewlinesEnd} from './index.js';

expectAssignable<string>(trimNewlines('\n🦄\r\n'));
expectAssignable<string>(trimNewlinesStart('\n\n🦄\n'));
expectAssignable<string>(trimNewlinesEnd('\n🦄\n\n'));

expectType<'🦄'>(trimNewlines('\n🦄\r\n'));
expectType<'🦄\n'>(trimNewlinesStart('\n\n🦄\n'));
expectType<'\n🦄'>(trimNewlinesEnd('\n🦄\n\n'));

declare const _string: string;

expectType<string>(trimNewlines(_string));
expectType<string>(trimNewlinesStart(_string));
expectType<string>(trimNewlinesEnd(_string));
