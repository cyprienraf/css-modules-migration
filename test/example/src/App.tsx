import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { MyComponent } from "./MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* This div with class myFooCss
        writes blablabla and the name of the css color applied
        */}
        <MyComponent />
        <div className="myFooCss" id="thisIsSupposeToBeRed">
          bla bla bla rouge
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
