import './App.css';
import EffectComponent from './Hooks/Effect';
import StateComponent from './Hooks/State';
import ContextComponent from './Hooks/Context';
import RefComponent from './Hooks/Ref';

function App() {
  return (

    <div>
      <h1>Hello World</h1>
      <StateComponent initialCounter={2}></StateComponent>
      <EffectComponent />
      <ContextComponent />
      <RefComponent />
    </div>
  );
}

export default App;
