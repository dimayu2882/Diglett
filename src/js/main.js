import "../styles/style.css";
import { Application, Assets, Sprite, Graphics } from "pixi.js";
import { initDevtools } from '@pixi/devtools';

import bgUrl from '@img/bg.png';
import diglettUrl from '@img/diglett-hide.png';

(async () => {
  // Create a new application
  const app = new Application();
  
  // Store the application in the global scope for debugging purposes
  globalThis.__PIXI_APP__ = app;

  // Initialize the application
  await app.init({
    background: "#1099bb",
    antialias: true,
    transparent: false,
    autoStart: false,
    resizeTo: window,
    sharedTicker: true,
  });
  
  await initDevtools({ app });
  await  Assets.init();

  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);
  
  //bg
  const textureBg = await Assets.load(bgUrl);
  const bg = new Sprite(textureBg);
  bg.width = app.screen.width;
  bg.height = app.screen.height;
  
  app.stage.addChild(bg);
  
  //diglett
  const diglettHiddenImg = await  Assets.load(diglettUrl);
  const diglettHiddenSprite = Object.assign( new Sprite(diglettHiddenImg), {
    anchor: { x: 0.5, y: 0.5 },
    position: { x: app.screen.width/2, y: app.screen.height/2 },
    scale: { x: 0.5, y: 0.5 }
  });

  app.stage.addChild(diglettHiddenSprite);
})();
