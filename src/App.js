
import './App.css';
import Calculator from './Pages/Calculator';
import Support from './Pages/Support'

const buttonValues = [
  ["C", "DEL", "?", "/"],
  ["1", "2", "3", "x"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "+"],
  ["0", "="],
];


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Calculator></Calculator>
      <Support></Support>
    </div>
  );
}

export default App;
