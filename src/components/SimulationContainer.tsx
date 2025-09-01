import ControlsPanel from './ControlsPanel';
import SimulationCanvas from './SimulationCanvas';

const SimulationContainer = () => {
  return (
    <div className="simulation-container">
      <SimulationCanvas />
      <ControlsPanel />

    </div>
  );
};

export default SimulationContainer;