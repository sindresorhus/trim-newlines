import {expectType} from 'tsd';
import {trimNewlines, trimNewlinesStart, trimNewlinesEnd} from './index.js';

expectType<string>(trimNewlines('\n🦄\r\n'));
expectType<string>(trimNewlinesStart('\n\n🦄\n'));
expectType<string>(trimNewlinesEnd('\n🦄\n\n'));
