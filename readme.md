# current-ice-speed

**Get the speed of the ICE train you're sitting in.**

[![npm version](https://img.shields.io/npm/v/current-ice-speed.svg)](https://www.npmjs.com/package/current-ice-speed)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/current-ice-speed.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Usage

```shell
npx current-ice-speed
# 264 km/h
npx current-ice-speed --json
# 264

npx current-ice-speed --json # in a tunnel
# null

npx current-ice-speed --refresh 5 # refresh speed every 5 seconds
```

## API

```js
speed()
```

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with the current speed in `km/h`.


## Contributing

If you have a question or have difficulties using `current-ice-speed`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/current-ice-speed/issues).
