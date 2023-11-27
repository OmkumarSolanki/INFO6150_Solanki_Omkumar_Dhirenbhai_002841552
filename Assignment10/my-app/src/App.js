import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Daily />} />
        <Route path="/:day" element={<Hourly />} />
      </Routes>
    </Router>
  );
}

export default App;
