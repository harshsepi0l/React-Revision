import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import ListBuilder from "./components/ListBuilder/ListBuilder";
import FetchAPI from "./components/FetchAPI/FetchAPI";
import { Navbar } from "./components/Navbar/Navbar";
import { ProfilePage } from "./Pages/ProfilePage";
import { Counter } from "./components/Counter/Counter";
import { useState, createContext } from "react";
import { GuessWord } from "./components/GuessWord/GuessWord";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/list" element={<ListBuilder />} />
            <Route path="/api" element={<FetchAPI />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/guessword" element={<GuessWord />} />
            <Route path="*" element={<h1> ERROR! </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
export default App;
