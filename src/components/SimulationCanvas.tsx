import {Application, extend, useTick} from "@pixi/react";
import {Container, Graphics, Sprite} from 'pixi.js';
import {useCallback, useState} from "react";

extend({Container, Graphics, Sprite});

const SimulationCanvas = () => {

    const ChildComponent1 = () => {
      const [position, setPosition] = useState({x:200,y:200});
      const redCircle = useCallback(graphics => {
        graphics.clear()
        graphics.setFillStyle({color: 'red'})
        graphics.circle(position.x, position.y, 10)
        graphics.fill()
      }, [position])

      //первый вариант ticker
      // useTick(() => {
      //   console.log('This will be logged on every tick1')
      // });

      //второй вариант ticker
      const testCallback = useCallback(
        (delta) => setPosition(prev => {
          let newX = prev.x + 0.1;
          let newY = prev.y + 0.1;

          if (newX > 800) newX = 0;
          if (newY > 600) newY = 0;
          return { x: newX, y: newY };
        })
        , [position]
      )
      useTick(testCallback)
      console.log(position)

      return <pixiGraphics draw={redCircle} />;
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
          <ChildComponent1
          />
          <ChildComponent2/>
        </Application>
      </div>
    )
  }
;

export default SimulationCanvas;