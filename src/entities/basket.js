import { Sprite, Assets } from 'pixi.js';
import url from '@img/basket.png';

export async function createBasket() {
	const texture = await Assets.load(url);
	
	const sprite = Object.assign( new Sprite(texture), {
		anchor: { x: 0.5, y: 0.5 },
		scale: { x: 0.5, y: 0.5 },
		interactive: true,
		buttonMode: true,
		cursor: 'pointer',
	});
	
	return sprite;
}
