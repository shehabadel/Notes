import './App.css';
import EffectComponent from './Hooks/Effect';
import StateComponent from './Hooks/State';
import ContextComponent from './Hooks/Context';
import RefComponent from './Hooks/Ref';
import ReducerComponent from './Hooks/Reducer';
import MemoComponent from './Hooks/Memo';
import CallbackComponent from './Hooks/Callback';
import LayoutCompoment from './Hooks/Layout';
function App() {
  return (

    <div>
      <h1>Hello World</h1>
      <StateComponent initialCounter={2}></StateComponent>
      <EffectComponent />
      <ContextComponent />
      <RefComponent />
      <ReducerComponent />
      <MemoComponent />
      <CallbackComponent />
      <LayoutCompoment />
    </div>
  );
}

export default App;
