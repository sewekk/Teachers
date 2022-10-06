import React from "react";
import { GlobalStyle } from "./assets/GlobalStyle";
import { MainWrapper } from "./components/Molecues/MainWrapper/MainWrapper";
import Navigation from "./components/Organism/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <MainWrapper>
          <Navigation></Navigation>
        </MainWrapper>
      </Router>
    </>
  );
};

export default App;
