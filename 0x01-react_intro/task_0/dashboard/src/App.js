import logo from "./175b85183ecedb529e14.jpg";
import icon from "./e240f8157634d33a9757.ico";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div class="App-footer">
        <p>Copyright 2020 - ALX</p>
      </div>
    </>
  );
}

export default App;
