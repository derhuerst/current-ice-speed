import test from 'tape'
import {speed} from './index.js'

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
