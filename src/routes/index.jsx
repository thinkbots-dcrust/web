import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import { Homepage, Team, Faq } from "pages";
import { NavBar, Footer } from "containers";

export default function App() {
  return (
    <Router>
      <MainWrapper>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/faqs">
            <Faq />
          </Route>
          
        </Switch>
        <Footer />
      </MainWrapper>
    </Router>
  );
}

const MainWrapper = styled.div`
  height: 100%;
  width:100%;
`;
