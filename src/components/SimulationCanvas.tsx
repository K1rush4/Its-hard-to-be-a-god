import {Application, extend} from "@pixi/react";
import {Container, Graphics, Sprite} from 'pixi.js';
import {useCallback} from "react";
extend({Container, Graphics, Sprite});

const SimulationCanvas = () => {

  const redCircle = useCallback(graphics => {
    graphics.clear()
    graphics.setFillStyle({color: 'red'})
    graphics.circle(200, 400, 10)
    graphics.fill()
  }, [])

  return (
    <div className="relative w-full h-full">
      <Application>
        <pixiGraphics draw={(graphics) => {
          graphics.clear();
          graphics.circle(200, 200, 10);
          graphics.fill(0x0000ff);
        }}/>
        <pixiGraphics draw={redCircle}/>
      </Application>
    </div>
  );
  };

  export default SimulationCanvas;