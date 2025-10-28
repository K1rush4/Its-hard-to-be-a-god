import { useEffect, useRef } from 'react';
import { Application, Assets, Container, Sprite } from 'pixi.js';

const SimulationCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null!);
  const appRef = useRef<Application | null>(null); // ← храним ссылку на приложение
  const isInitializedRef = useRef(false); // ← флаг инициализации

  useEffect(() => {
    const initPixi = async () => {
      // Если уже инициализирован или нет контейнера - выходим
      if (!canvasRef.current || isInitializedRef.current) return;

      isInitializedRef.current = true;

      // Create a new application
      const app = new Application();
      appRef.current = app; // ← сохраняем ссылку

      // Initialize the application
      await app.init({
        background: '#1099bb',
        resizeTo: canvasRef.current
    });

      // Очищаем контейнер перед добавлением
      canvasRef.current.innerHTML = '';

      // Append the application canvas to OUR container
      canvasRef.current.appendChild(app.canvas);

      // Create and add a container to the stage
      const container = new Container();
      app.stage.addChild(container);

      // Load the bunny texture
      const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

      // Create a 5x5 grid of bunnies in the container
      for (let i = 0; i < 25; i++) {
        const bunny = new Sprite(texture);
        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
      }

      // Move the container to the center
      container.x = app.screen.width / 2;
      container.y = app.screen.height / 2;

      // Center the bunny sprites in local container coordinates
      container.pivot.x = container.width / 2;
      container.pivot.y = container.height / 2;

      // Listen for animate update
      app.ticker.add((time) => {
        container.rotation -= 0.01 * time.deltaTime;
      });
    };

    initPixi();

    // Cleanup function
    return () => {
      if (appRef.current) {
        try {
          // Явно говорим TypeScript, что destroy существует
          (appRef.current as Application).destroy(true, true);
        } catch (cleanupError) {
          console.warn('Error during PixiJS cleanup:', cleanupError);
        }
      }
      appRef.current = null;
      isInitializedRef.current = false;
    };
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-full">
      {/* PixiJS canvas будет добавлен сюда */}
    </div>
  );
};

export default SimulationCanvas;