import logo from './logo.svg';
import './App.css';

// function based component
let myname = "Keshav"
function App() {
  return (
    // JSX 
    <>
    <h1 className="name-heading"> My name is {myname} </h1>
    <div className="App">
      <header className="App-header">
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
          Learn React with Keshav
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
