# Reasonable Filename

A simple JavaScript utility to reasonably validate file and folder names.

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

## Comparison to [`valid-filename`](https://www.npmjs.com/package/valid-filename)

**Pros**

- Supports some checks `valid-filename` doesn't, for example, Windows reserved keywords with extensions
- Clearly specifies that results aren't a guarantee as to a validity, which is a positive from a security standpoint
- `valid-filename` incorrectly disallows `COM0` and `LPT0`, this package doesn't have that problem
- Has 31 unit tests based on actual filesystem testing

**Cons**

- This package doesn't expose granular regexes which can be used for coercing invalid names into validity

## Contributions

Spot a rule we're missing or a mistake in the current ruleset? Feel free to submit a PR or issue! We have a commitment to reviewing in less than 24 hours from issue or pull request submission.