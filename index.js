export default function trimNewlines(string) {
	return string.replace(/^[\r\n]+|[\r\n]+$/g, '');
}

trimNewlines.start = string => string.replace(/^[\r\n]+/, '');
trimNewlines.end = string => string.replace(/[\r\n]+$/, '');
