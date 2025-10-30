import {Application, extend, useTick} from "@pixi/react";
import {Container, Graphics, Sprite} from 'pixi.js';
import {useCallback} from "react";

extend({Container, Graphics, Sprite});

const SimulationCanvas = () => {

    const ChildComponent1 = () => {
      const redCircle = useCallback(graphics => {
        graphics.clear()
        graphics.setFillStyle({color: 'red'})
        graphics.circle(200, 400, 10)
        graphics.fill()
      }, [])

      //первый вариант ticker
      useTick(() => {
        console.log('This will be logged on every tick1')
      });

      //второй вариант ticker
      const testCallback = useCallback(
        () => console.log('This will be logged on every tick2')
        , []
      )
      useTick(testCallback)

      return <pixiGraphics draw={redCircle}/>;
    };

    const ChildComponent2 = () => {
      return <pixiGraphics draw={(graphics) => {
        graphics.clear();
        graphics.circle(200, 200, 10);
        graphics.fill(0x0000ff);
      }}/>
    };

    return (
      <div className="relative w-full h-full">
        <Application
          width={800}
          height={600}
          backgroundColor={0xFFE4C4}
        >
          <ChildComponent1/>
          <ChildComponent2/>
        </Application>
      </div>
    )
  }
;

export default SimulationCanvas;