import gsap from 'gsap';
import { Container, Text, Graphics } from 'pixi.js';
import { user } from '../entities/user.js';

import { shuffleArray } from '../helpers/index.js'
import { createBackground } from '../entities/background.js'
import { addingDiglets } from './addingDiglets.js'
import { diglettManager } from './diglettManager.js'

export async function setupGame(app) {
	await createBackground(app)
	
	// Создаем контейнер
	const diglettContainer = new Container()
	
	// Добавляем диглетов один раз и сохраняем результат
	const filledContainer = await addingDiglets(diglettContainer, app)
	
	// Добавляем контейнер на сцену
	app.stage.addChild(filledContainer)
	
	// Получаем массив детей
	const digletts = filledContainer.children
	
	// Перемешиваем массив один раз
	const shuffledDigletts = shuffleArray([...digletts])
	
	diglettManager(shuffledDigletts)
	
	
	

// Структура для статуса
	const statusBar = {
		lives: 3,
		score: 0,
		timer: 30
	}

// Создаем контейнер для статус-бара
	const statusContainer = new Container();
	app.stage.addChild(statusContainer);
	
	statusContainer.pivot.set(110, 0);


// Функция для отрисовки прогресс-бара для счета
	function drawScore() {
		const scoreBarWidth = 300;
		const scoreBarHeight = 20;
		
		// Прогресс-бар для счета
		const scoreBarBackground = new Graphics();
		scoreBarBackground.roundRect(400, 10, scoreBarWidth, scoreBarHeight, 10);
		statusContainer.addChild(scoreBarBackground);
		scoreBarBackground.fill(0x555555);
		
		const scoreBarFill = new Graphics();
		scoreBarFill.roundRect(400, 10, (user.score / 30) * scoreBarWidth, scoreBarHeight, 10); // Считаем от 0 до 100
		statusContainer.addChild(scoreBarFill);
		scoreBarFill.fill(0xFF9330);
		
		gsap.to(scoreBarFill, {
			width: (user.score / 30) * scoreBarWidth, // Ширина пропорционально текущему счёту
			duration: 1, // Длительность анимации
			ease: 'power2.out', // Плавное завершение
		});
	}

// Функция обновления всех прогресс-баров
	function updateStatusBar() {
		drawScore();
	}

// Обновление таймера каждую секунду
	setInterval(() => {
		if (statusBar.timer > 0) {
			statusBar.timer--;
		}
		updateStatusBar();
	}, 1000);

// Инициализация статус-бара
	updateStatusBar();
	
	
}
