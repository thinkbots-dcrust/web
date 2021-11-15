import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import { Homepage, Team, Faq, Page404, Login, Events } from "pages";
import { NavBar, Footer } from "containers";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { baseColor } from "styles/base";

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <Loader
            containerStyles={{
              background: baseColor.background,
            }} // Flex layout styles
            innerStyles={{
              backgroundColor: baseColor.secondary,
              width: "50vw",
            }} // Inner container styles
            barStyles={{
              backgroundColor: baseColor.primary,
            }} // Loading-bar styles
            dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
            initialState={(active) => active}
            dataStyles={{
              color: "#fafafa",
              fontSize: "25px",
              fontFamily: "Raleway",
              fontWeight: "500",
            }}
          />
        }
      >
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
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </MainWrapper>
      </Suspense>
    </Router>
  );
}

const MainWrapper = styled.div``;
