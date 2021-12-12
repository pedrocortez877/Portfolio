import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { Home } from "./Screens/Home";
import { Contact } from "./Screens/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
