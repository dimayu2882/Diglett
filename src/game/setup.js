import { Application, Assets, Sprite, Graphics, Container } from "pixi.js";
import gsap from 'gsap';

import { createBackground } from '../entities/background.js';
import { createBasket } from '../entities/basket.js';
import { createDiglett } from '../entities/diglett.js';

export async function setupGame(app) {
	await createBackground(app);
	
	const diglettContainer = new Container();
	
	for (let i = 0; i < 3; i++) {
		let container = diglettContainer[`container${i}`];
		container = new Container();
		
		const newDiglett = await createDiglett(app);
		const newBasket = await createBasket(app);
		
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
	
	app.stage.addChild(diglettContainer);
	console.log(diglettContainer.children[0].children.find(child => child.label === 'diglett'));
	
	
	
	let isDiglettShown = false;

	// basket.on('pointerdown', () => {
	// 	isDiglettShown = !isDiglettShown;
	//
	// 	if (isDiglettShown) {
	// 		gsap.to(diglett.scale, {
	// 			y: .5,
	// 			duration: 0.8,
	// 			ease: "power3.inOut"
	// 		});
	//
	// 	} else {
	// 		gsap.to(diglett.scale, {
	// 			y: 0,
	// 			duration: 0.8,
	// 			ease: "back.out(1)"
	// 		});
	// 	}
	// });
}
