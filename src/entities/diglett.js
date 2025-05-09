import { Sprite, Assets } from 'pixi.js';
import url from '@img/diglett.png';

export async function createDiglett() {
	const texture = await Assets.load(url);
	
	const sprite = Object.assign( new Sprite(texture), {
		anchor: { x: 0.5, y: 1 },
		scale: { x: 0.5, y: 0 },
		position: { x: 0, y: 80 },
		interactive: true,
		buttonMode: true,
		cursor: 'pointer',
		label: 'diglett',
	});
	
	return sprite;
}
