import isReasonableFilename from '../src'

describe('invalid cases', () => {
	it('"CON" is invalid', () => expect(isReasonableFilename('CON')).toBeFalsy())
	it('"COM1" is invalid', () =>
		expect(isReasonableFilename('COM1')).toBeFalsy())
	it('"cON" is invalid', () => expect(isReasonableFilename('cON')).toBeFalsy())
	it('"con.txt" is invalid', () =>
		expect(isReasonableFilename('con.txt')).toBeFalsy())
	it('"con .asd" is invalid', () =>
		expect(isReasonableFilename('con .asd')).toBeFalsy())
	it('"con" is invalid', () => expect(isReasonableFilename('con')).toBeFalsy())
	it('"con.tar.gz" is invalid', () =>
		expect(isReasonableFilename('con.tar.gz')).toBeFalsy())
	it('"con." is invalid', () =>
		expect(isReasonableFilename('con.')).toBeFalsy())
	it('"lpt2.zip" is invalid', () =>
		expect(isReasonableFilename('lpt2.zip')).toBeFalsy())
	it('"asdasfasf." is invalid', () =>
		expect(isReasonableFilename('asdasfasf.')).toBeFalsy())
	it('"lmao: bruh.txt" is invalid', () =>
		expect(isReasonableFilename('lmao: bruh.txt')).toBeFalsy())
	it('"\\" is invalid', () => expect(isReasonableFilename('\\')).toBeFalsy())
	it('"/" is invalid', () => expect(isReasonableFilename('/')).toBeFalsy())
	it('" i hate" is invalid', () =>
		expect(isReasonableFilename(' i hate')).toBeFalsy())
	it('"blah " is invalid', () =>
		expect(isReasonableFilename('blah ')).toBeFalsy())
	it('" asd " is invalid', () =>
		expect(isReasonableFilename(' asd ')).toBeFalsy())
	it('" " is invalid', () => expect(isReasonableFilename(' ')).toBeFalsy())
	it('"." is invalid', () => expect(isReasonableFilename('.')).toBeFalsy())
	it('".." is invalid', () => expect(isReasonableFilename('..')).toBeFalsy())
	it('"con ." is invalid', () =>
		expect(isReasonableFilename('con .')).toBeFalsy())
	it('"" is invalid', () => expect(isReasonableFilename('')).toBeFalsy())
	it('"asdf\\u0000x" is invalid', () =>
		expect(isReasonableFilename('asdf\u0000x')).toBeFalsy())
	it('"asdf\\u0000x" is invalid', () =>
		expect(isReasonableFilename('asdf\u0000x')).toBeFalsy())
	it('x 256 times is invalid', () =>
		expect(isReasonableFilename('a'.repeat(256))).toBeFalsy())
})

describe('valid cases', () => {
	it('"is fine" is valid', () =>
		expect(isReasonableFilename('is fine')).toBeTruthy())
	it('"foo" is valid', () => expect(isReasonableFilename('foo')).toBeTruthy())
	it('"bar.txt" is valid', () =>
		expect(isReasonableFilename('bar.txt')).toBeTruthy())
	it('"conx" is valid', () => expect(isReasonableFilename('conx')).toBeTruthy())
	it('"COM0" is valid', () => expect(isReasonableFilename('CON0')).toBeTruthy())
	it('"LPT0" is valid', () => expect(isReasonableFilename('LPT0')).toBeTruthy())
	it('x 255 times is valid', () =>
		expect(isReasonableFilename('a'.repeat(255))).toBeTruthy())
})
