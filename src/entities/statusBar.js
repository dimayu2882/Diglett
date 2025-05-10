import { Container, Graphics } from 'pixi.js';

import { COLORS, DIMENSIONS, GAME_SETTINGS } from '../constants';
import { user } from './user.js';

export async function createStatusBar(app) {
	const statusContainer = new Container();
	app.stage.addChild(statusContainer);
	
	statusContainer.pivot.set(110, 0);
	
	// Прогресс-бар для счета
	const scoreBarBackground = new Graphics();
	scoreBarBackground.roundRect(
		DIMENSIONS.progressBarPositions.x,
		DIMENSIONS.progressBarPositions.y,
		DIMENSIONS.progressBarSize.width,
		DIMENSIONS.progressBarSize.height,
		DIMENSIONS.progressBarSize.borderRadius
	);
	statusContainer.addChild(scoreBarBackground);
	scoreBarBackground.fill(COLORS.progressBackground);
	
	const scoreBarFill = new Graphics();
	scoreBarFill.roundRect(
		DIMENSIONS.progressBarPositions.x,
		DIMENSIONS.progressBarPositions.y,
		(user.score / GAME_SETTINGS.levelFirst.toltalDiglets)
		* DIMENSIONS.progressBarSize.width,
		DIMENSIONS.progressBarSize.height,
		DIMENSIONS.progressBarSize.borderRadius);
	statusContainer.addChild(scoreBarFill);
	scoreBarFill.fill(COLORS.progressFill);
	
	return scoreBarFill;
}
