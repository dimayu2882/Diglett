import "../styles/style.css";
import { Application, Assets, Sprite } from "pixi.js";
import { initDevtools } from '@pixi/devtools';

(async () => {
  // Create a new application
  const app = new Application({
  });
  
  // Store the application in the global scope for debugging purposes
  globalThis.__PIXI_APP__ = app;

  // Initialize the application
  await app.init({
    background: "#1099bb",
    resizeTo: window,
    antialias: true,
    transparent: false,
    
  });
  
  await initDevtools({ app });

  // Append the application canvas to the document body
  document.getElementById("pixi-container").appendChild(app.canvas);
  
  //bg
  const textureBg = await Assets.load("/assets/bg.png");
  const bg = new Sprite(textureBg);
  bg.width = app.screen.width;
  bg.height = app.screen.height;
  app.stage.addChild(bg);
  
  // Load the bunny texture
  const texture = await Assets.load("/assets/diglett-hide.svg");
  // Create a bunny Sprite
  const diglett = new Sprite(texture);

  // Center the sprite's anchor point
  diglett.anchor.set(0.5);

  // Move the sprite to the center of the screen
  diglett.position.set(app.screen.width / 2, app.screen.height / 2);

  // Add the bunny to the stage
  app.stage.addChild(diglett);

  
})();
