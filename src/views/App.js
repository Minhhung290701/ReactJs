import logo from './logo.svg';
import './App.scss';
import Todocomponent from './screentodo/TodoComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <todoscreen/>
        <Todocomponent/>
      </header>
    </div>
  );
}

export default App;
