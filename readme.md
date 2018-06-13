# current-ice-speed

**Get the speed of the ICE train you're sitting in.**

[![npm version](https://img.shields.io/npm/v/current-ice-speed.svg)](https://www.npmjs.com/package/current-ice-speed)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/current-ice-speed.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Usage

```shell
npx current-ice-speed
# 264 km/h
npx current-ice-speed --json
# 264

npx current-ice-speed --json # in a tunnel
# null
```

## API

```js
speed()
```

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with the current speed in `km/h`.


## Contributing

If you have a question or have difficulties using `current-ice-speed`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/current-ice-speed/issues).
