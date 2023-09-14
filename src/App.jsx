import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./views/About";
import Character from "./views/Character";
import Home from "./views/Home";
import Errors from "./components/Errors";
import './app.css'
export const ErrorContext = createContext({});

function App() {
  const [error, setError] = useState({});
  
  return (
    <div>
      <ErrorContext.Provider value={{error, setError}}>
      <Nav />
      <Errors error={error} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/character/:id"
          element={<Character />}
        />
      </Routes>
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
