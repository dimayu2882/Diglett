import { Container } from 'pixi.js';

import { createBackground } from '../entities/background.js';
import { createStatusBar } from '../entities/statusBar.js';
import { shuffleArray } from '../helpers/index.js';
import { addingDiglets } from './addingDiglets.js';
import { diglettManager } from './diglettManager.js';

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
	
	// Создаём диглетов с их механизмами
	diglettManager(shuffledDigletts, app);
	
	//Создание статус бара
	await createStatusBar(app, shuffledDigletts.length);
}
