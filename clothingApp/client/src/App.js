import React from "react";
import Login from "./pages/Login";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Main></Main>
      </Router>
    </div>
  );
}

export default App;
