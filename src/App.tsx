import './App.css';
import SimulationContainer from './components/SimulationContainer';
import HeaderContainer from "./components/HeaderContainer.tsx";
import FooterContainer from "./components/FooterContainer.tsx";

function App() {
  return (
    <div className="p-10 ">
      <HeaderContainer/>
      <SimulationContainer/>
      <FooterContainer/>
    </div>
  )
}

export default App;