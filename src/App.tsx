import './App.css';
import SimulationContainer from './components/SimulationContainer';

function App() {
  return (
    <div className="app">
      {/* Заголовок во всю ширину */}
      <header className="header">
        <h1>Эволюционная Симуляция</h1>
      </header>

      {/* Контейнер с полем и управлением */}
      <SimulationContainer />
    </div>
  );
}

export default App;