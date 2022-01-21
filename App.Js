import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/"></Link> <Link to="/"></Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;