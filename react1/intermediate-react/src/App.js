import './App.css';
import EffectComponent from './Hooks/Effect';
import StateComponent from './Hooks/State';
import ContextComponent from './Hooks/Context';

function App() {
  return (

    <div>
      <h1>Hello World</h1>
      <StateComponent initialCounter={2}></StateComponent>
      <EffectComponent />
      <ContextComponent />
    </div>
  );
}

export default App;
