import url from '@img/diglett.png'
import { Assets, Sprite } from 'pixi.js'

export async function createDiglett() {
	const texture = await Assets.load(url);

	return Object.assign(new Sprite(texture), {
		anchor: { x: 0.5, y: 1 },
		scale: { x: 0.5, y: 0 },
		position: { x: 0, y: 80 },
		label: 'diglett'
	});
}
