// eslint-disable-next-line no-control-regex
export const reasonableFilenameRegex = /[.\s]$|^\s|(?:[\\/:*?"<>|\u0000-\u001F])|(?:^(?:CON|PRN|AUX|NUL|COM\d|LPT\d)\s*(?:\..+)?$)/i

const isReasonableFilename = (filename: string): boolean => {
	if (filename.length === 0 || filename.length > 255) return false
	return !reasonableFilenameRegex.test(filename)
}

export default isReasonableFilename
