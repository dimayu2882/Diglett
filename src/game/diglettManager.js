import gsap from 'gsap';

export const diglettManager = (array) => {
	array.forEach((child, index) => {
		const diglett = child.children.find(item => item.label === 'diglett');
		
		if (!diglett) return;
		
		function showDiglett() {
			gsap.to(diglett.scale, {
				y: 0.5,
				duration: 0.8,
				ease: 'power3.inOut',
				delay: index * 0.5,
			});
			diglett.isVisible = true;
		}
		
		function hideDiglett() {
			gsap.to(diglett.scale, {
				y: 0,
				duration: 0.5,
				ease: 'power1.in',
				delay: index * 0.5,
			});
			diglett.isVisible = false;
		}
		
		showDiglett();
		
		// Таймер для автоскрытия после 3.5 секунд
		diglett.hideTimeout = setTimeout(() => {
			if (diglett.isVisible) {
				hideDiglett();
			}
		}, 3500 + (index * 500)); // Увеличиваем время на 500ms для каждого элемента
		
		child.on('pointerdown', (event) => {
			const target = event.currentTarget;
			const diglettEvent = target.children.find(item => item.label === 'diglett');
			
			if (diglettEvent && diglettEvent.isVisible) {
				clearTimeout(diglettEvent.hideTimeout);
				
				gsap.to(diglettEvent.scale, {
					y: 0,
					duration: 0.5,
					ease: 'power1.in',
				});
				
				diglettEvent.isVisible = false;
			}
		});
	});
};
