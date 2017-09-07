'use strict'

const test = require('tape')

const speed = require('.')

test('speed', (t) => {
	t.plan(3)

	speed()
	.then((speed) => {
		t.equal(typeof speed, 'number')
		t.ok(speed >= 0)
		t.ok(speed <= 500)
	})
	.catch(t.ifError)
})
