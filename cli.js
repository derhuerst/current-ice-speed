#!/usr/bin/env node
'use strict'

const mri = require('mri')

const pkg = require('./package.json')
const speed = require('.')

const argv = mri(process.argv.slice(2), {
	boolean: ['help', 'h', 'version', 'v']
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    current-ice-speed [--json]
Options:
    --json  Output as JSON. Default: false
Examples:
    current-ice-speed --json
\n`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`current-ice-speed v${pkg.version}\n`)
	process.exit(0)
}

const json = !!argv.json

speed()
.then((speed) => {
	process.stdout.write(json ? JSON.stringify(speed) : speed + ' km/h\n')
})
.catch((err) => {
	console.error(err)
	process.exit(1)
})
