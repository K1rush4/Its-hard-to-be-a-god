import ControlsPanel from './ControlsPanel';
import SimulationCanvas from './SimulationCanvas';

const SimulationContainer = () => {
  return (
    <div className="simulation-container">
      {/* Левая часть - поле (4/5) */}
      <SimulationCanvas />

      {/* Правая часть - управление (1/5) */}
      <ControlsPanel />
    </div>
  );
};

export default SimulationContainer;