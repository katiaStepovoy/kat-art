import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home.js";
import Inspiration from "./Pages/Inspiration";
import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/inspiration" element={<Inspiration />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
