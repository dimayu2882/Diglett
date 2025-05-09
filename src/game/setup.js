import { Container } from 'pixi.js';

import { shuffleArray } from '../helpers/index.js';
import { createBackground } from '../entities/background.js';
import { addingDiglets } from './addingDiglets.js';
import { hidingDiglett } from './hidingDiglett.js';
import { visiblingDiglett } from './visiblingDiglett.js';

export async function setupGame(app) {
	await createBackground(app);
	
	// Создаем контейнер
	const diglettContainer = new Container();
	
	// Добавляем диглетов один раз и сохраняем результат
	const filledContainer = await addingDiglets(diglettContainer, app);
	
	// Добавляем контейнер на сцену
	app.stage.addChild(filledContainer);
	
	// Получаем массив детей
	const digletts = filledContainer.children;
	
	// Перемешиваем массив один раз
	const shuffledDigletts = shuffleArray([...digletts]);
	
	// Применяем анимацию появления
	shuffledDigletts.forEach((child, index) => {
		visiblingDiglett(child, index);
	});
	
	// Добавляем обработчики скрытия
	hidingDiglett(shuffledDigletts);
}
