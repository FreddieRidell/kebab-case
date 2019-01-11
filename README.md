# @freddieridell/kebab-case

> A stripped down, minimal kebab-case parser, to deal with 90% of programmatic conversion usage

### Usage
```javascript
import keb from "@freddieridell/kebab-case"
console.log(keb("foo Bar Baz"));
```

This is a small utility designed for converting strings to kebab. It is designed for programmatic usage, like re-shaping APIs from `camelCase` to `kebab-case`. It is not designed for handling user input, please use a more featureful library like [lodash.kebabcase](https://www.npmjs.com/package/lodash.kebabcase) for that much more challenging problem :)
