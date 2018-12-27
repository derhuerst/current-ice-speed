#!/usr/bin/env node
'use strict'

const mri = require('mri')

const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: ['help', 'h', 'version', 'v']
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    current-ice-speed [--json]
Options:
    --refresh <n>  Refresh output every n seconds.
    --json         Output as JSON. Default: false
Examples:
    current-ice-speed --json
\n`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`current-ice-speed v${pkg.version}\n`)
	process.exit(0)
}

const {isatty} = require('tty')
const {eraseLine, cursorLeft} = require('ansi-escapes')
const speed = require('.')

const onError = (err) => {
	console.error(err)
	process.exit(1)
}

const refresh = argv.refresh ? parseInt(argv.refresh) : 0
if (Number.isNaN(refresh)) onError('--refresh must be a number.')
const json = !!argv.json

const isTerminal = isatty(process.stdout.fd)

const checkAndPrint = () => {
	speed()
	.then((speed) => {
		let out
		if (json) out = JSON.stringify(speed)
		else if (speed === null) {
			out = 'no data'
			process.exitCode = 1
		} else out = speed + ' km/h'

		if (isTerminal && !json) out = eraseLine + cursorLeft + out
		else out += '\n'
		process.stdout.write(out)
	})
	.catch(onError)
}

checkAndPrint()
if (refresh > 0) setInterval(checkAndPrint, refresh * 1000)
