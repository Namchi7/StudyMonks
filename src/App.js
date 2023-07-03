import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import CSearch from "./components/CSearch";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/candidate-search" element={<CSearch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
