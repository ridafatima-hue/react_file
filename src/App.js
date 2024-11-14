import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/authform" className="p-2">Auth Form</Link>
        <Link to="/simpleform" className="p-2">Simple Form</Link>
      </nav>
      <Routes>
        <Route path="/authform" element={<AuthForm />} />
        <Route path="/simpleform" element={<SimpleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
