import {status} from 'wifi-on-ice-portal-client'

const speed = async () => {
	const data = await status()
	return data.speed
}

export {
	speed,
}
