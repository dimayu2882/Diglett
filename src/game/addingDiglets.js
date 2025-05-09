import { Container } from 'pixi.js';

import { createBasket } from '../entities/basket.js'
import { createDiglett } from '../entities/diglett.js'

export const addingDiglets = async (diglettContainer, app) => {
	for (let i = 0; i < 3; i++) {
		let container = diglettContainer[`container${i}`];
		container = new Container();
		
		const newDiglett = await createDiglett();
		const newBasket = await createBasket();
		
		container.addChild(newDiglett, newBasket);
		
		const heightApp = app.screen.height;
		const widthApp = app.screen.width;
		
		const spaceBetween = (widthApp - container.width * 3) / 2 - 20;
		let containerPositionX = container.width / 2 + i * (container.width + spaceBetween);
		
		let containerPositionY = heightApp / 2;
		
		Object.assign(container, {
			interactive: true,
			cursor: 'pointer',
			position: { x: containerPositionX, y: containerPositionY },
			pivot: { x: 0, y: 0 },
		});
		
		diglettContainer.addChild(container);
		diglettContainer.position.x = 20;
	}
	
	return diglettContainer;
};
