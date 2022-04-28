import logo from './logo.svg';
import './App.css';

import Nasri from './Nasri';

import Hamza from './Hamza';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <Nasri/>
    
        <Hamza />

      </header>
    </div>
  );
}

export default App;
