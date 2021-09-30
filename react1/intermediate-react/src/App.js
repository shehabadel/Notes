import './App.css';
import StateComponent from './Hooks/State';

function App() {
  return (

    <div>
      <h1>Hello World</h1>
      <StateComponent initialCounter={2}></StateComponent>
    </div>
  );
}

export default App;
