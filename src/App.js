import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { HomePage } from "./Screens/HomePage";
import { Contact } from "./Screens/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
