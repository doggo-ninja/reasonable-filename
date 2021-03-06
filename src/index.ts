// eslint-disable-next-line no-control-regex
export const unreasonableFilenameRegex = /[.\s]$|^\s|(?:[\\/:*?"<>|\u0000-\u001F])|(?:^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])\s*(?:\..+)?$)/i

const isReasonableFilename = (filename: string): boolean => {
	if (filename.length === 0 || filename.length > 255) return false
	return !unreasonableFilenameRegex.test(filename)
}

export default isReasonableFilename
