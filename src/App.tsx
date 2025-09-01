import './App.css';
import SimulationContainer from './components/SimulationContainer';
import StatusBar from "./components/StatusBar.tsx";
import HeaderContainer from "./components/HeaderContainer.tsx";

function App() {
  return (
    <div className="app">
      <HeaderContainer/>
      <SimulationContainer/>
      <StatusBar/>
    </div>
  );
}

export default App;