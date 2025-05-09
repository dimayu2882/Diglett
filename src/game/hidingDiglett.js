import gsap from 'gsap';

export const hidingDiglett = (array) => {
	array.forEach((child) => {
		child.on('pointerdown', (event) => {
			const diglettEvent = event.target.children.find(child => child.label === 'diglett');
			
			if (diglettEvent.isVisible) {
				gsap.to(diglettEvent.scale, {
					y: 0,
					duration: 0.8,
					ease: 'back.out(1)'
				});
				
				diglettEvent.isVisible = false;
			}
		});
	});
};
