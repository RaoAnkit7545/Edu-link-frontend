import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import InitialPage from "./pages/initialPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
