import gsap from 'gsap';

import { DIMENSIONS } from '../constants';
import { user } from '../entities/user.js';

export const changeStatusBar = (progressFill) => {
	const targetWidth = (user.score / 30) * DIMENSIONS.progressBarSize.width;
	
	const temp = { value: 0 };
	
	gsap.to(temp, {
		value: targetWidth,
		duration: 1,
		ease: 'power3.inOut',
		onUpdate: () => {
			progressFill.clear();
			progressFill.roundRect(
				DIMENSIONS.progressBarPositions.x,
				DIMENSIONS.progressBarPositions.y,
				temp.value,
				DIMENSIONS.progressBarSize.height,
				DIMENSIONS.progressBarSize.borderRadius
			);
			progressFill.fill(0xFF9330);
		}
	});
};

