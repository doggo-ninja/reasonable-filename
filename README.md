# Reasonable Filename

A simple JavaScript utility to validate file and folder names a reasonable amount.

```bash
# NPM
npm install reasonable-filename
# Yarn
yarn add reasonable-filename
```

```ts
import isReasonableFilename from 'reasonable-filename'

console.log(isReasonableFilename('file.c')) // true
console.log(isReasonableFilename('LPT2.tar.gz')) // false
```

Rules it takes into account:

- Cannot end with `.` (this also rules out `.` and `..` as names)
- Cannot start or end with whitespace
- Cannot contain `\/:*?"<>|`
- Cannot contain non-printable characters (U+0000 to U+001F)
- The portion before the first `.`, with trailing whitespace trimmed, cannot case-insensitvely match a Windows reserved keyword (for example, `CON`)
- Must be 255 characters or fewer, and at least 1 character

## Why only reasonable?

Filenames are super weird. Different platforms have varying levels of requirements, with Windows having the strictest collection. Windows in particular has a bunch of odd-seeming rules which are mostly for backwards compatibility. As such, it's almost impossible to perfectly test for filename compatibility on every platform.

This package gets as close as we can. You should not fully trust it for security guarantees, but it will help validate most cases.

## Comparison to `valid-filename`

- Supports some checks `valid-filename` doesn't, for example, Windows reserved keywords with extensions
- Clearly specifies that results aren't a guarantee that filenames are valid, which is positive from a security standpoint
- As a potential downside, this package doesn't expose regexes which can be used for replacing characters in the string to coerce invalid names into validity
- Has 31 unit tests based on actual filesystem testing

## Contributions

Spot a rule we're missing or a mistake in the current ruleset? Feel free to submit a PR or issue! We have a commitment to reviews in less than 24 hours from submission.