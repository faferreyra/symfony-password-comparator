# Symfony 3.4 password checker

A simple javascript function to compare a plain text with a hash generated by the default Symfony 3.4 password hasher.

## Usage

```js
const symfonyPasswordComparator = require('./comparator');

await passwordMatches = await symfonyPasswordComparator(plainText, encodedPassword);
```