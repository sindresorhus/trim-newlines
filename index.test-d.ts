import {expectType} from 'tsd';
import trimNewlines = require('.');

expectType<string>(trimNewlines('\n🦄\r\n'));
expectType<string>(trimNewlines.start('\n\n🦄\n'));
expectType<string>(trimNewlines.end('\n🦄\n\n'));
