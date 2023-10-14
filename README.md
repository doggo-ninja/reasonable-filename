<div align='center'>
<h1>Reasonable Filename</h1>
by <a href='https://kognise.dev/' target='_blank'>@kognise</a>
</div>

---

A simple JavaScript/TypeScript utility to reasonably validate file and folder names.

```bash
# NPM
npm install reasonable-filename
# Yarn
yarn add reasonable-filename
# Bun???
bun add reasonable-filename
```

```ts
import isReasonableFilename from 'reasonable-filename'

console.log(isReasonableFilename('file.c')) // true
console.log(isReasonableFilename('LPT2.tar.gz')) // false (invalid on Windows)

// If you want to access the regex directly...
// This doesn't do length checks.
import { unreasonableFilenameRegex } from 'reasonable-filename'
console.log(!unreasonableFilenameRegex.test('file.c')) // true
```

## How is this better than [`valid-filename`](https://www.npmjs.com/package/valid-filename) by sindresorhus?

- Checks for things `valid-filename` doesn't, for example, Windows reserved keywords with extensions
- Does not incorrectly disallow `COM0` and `LPT0`
- Clearly specifies exactly what guarantees it provides in the README
- Has 31 unit tests based on actual results across platforms and filesystems

Sure, this is less popular, but even if I die and stop providing support, `reasonable-filename` is small enough that you can easily copy it into your project.

I love you sindresorhus!

## Rules

- Cannot end with `.` (this also rules out `.` and `..` as names)
- Cannot start or end with whitespace
- Cannot contain `\/:*?"<>|`
- Cannot contain non-printable characters (U+0000 to U+001F)
- The portion before the first `.`, with trailing whitespace trimmed, cannot case-insensitively match a Windows reserved keyword
  - `CON`, `PRN`, `AUX`, `NUL`, `COM1`, `COM2`, `COM3`, `COM4`, `COM5`, `COM6`, `COM7`, `COM8`, `COM9`, `LPT1`, `LPT2`, `LPT3`, `LPT4`, `LPT5`, `LPT6`, `LPT7`, `LPT8`, `LPT9`
- Must be 255 characters or fewer, and at least 1 character

## Why only reasonable?

Filenames are super weird. Different platforms have different requirements, with Windows being the strictest. Windows in particular is a backwards compatibilty behemoth with a lot of strange reserved names. As such, it's impossible to create a perfect test of filename compatibility on every platform.

This package gets as close as I can. It can't provide any security guarantees beyond what is specified under Rules above, but but it will help validate most cases.

## Contributions

Spot a rule we're missing or a mistake in the current ruleset? Feel free to submit a PR or issue! I will review everything in less than 24 hours from issue or pull request submission.
