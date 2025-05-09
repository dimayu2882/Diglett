import url from '@img/basket.png';
import { Assets, Sprite } from 'pixi.js';

export async function createBasket() {
	const texture = await Assets.load(url);

	return Object.assign(new Sprite(texture), {
		anchor: { x: 0.5, y: 0.5 },
		scale: { x: 0.5, y: 0.5 },
	});
}
