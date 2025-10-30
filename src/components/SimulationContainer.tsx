import ControlsPanel from './ControlsPanel';
import SimulationCanvas from './SimulationCanvas';

const SimulationContainer = () => {
  return (
    <div className="h-[600px] flex flex-row mb-5 gap-5">
      <div className="flex basis-4/5 justify-center items-center bg-neutral-100 rounded-md">
        <SimulationCanvas/>
      </div>
      <div className="flex basis-1/5 justify-center items-center bg-neutral-100 rounded-md">
        <ControlsPanel/>
      </div>
    </div>
  );
};

export default SimulationContainer;