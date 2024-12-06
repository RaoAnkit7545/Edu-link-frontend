import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Secondpage from "./pages/secondpage";
import Thirdpage from "./pages/thirdpage";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/second" element={<Secondpage />} />
          <Route path="/third" element={<Thirdpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
