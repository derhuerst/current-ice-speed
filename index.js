'use strict'

const {status} = require('wifi-on-ice-portal-client')

const speed = () => {
	return status()
	.then(data => data.speed)
}

module.exports = speed
