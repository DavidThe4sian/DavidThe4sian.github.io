import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ResumePage from "ResumePage.js";
import WorkExperiencePage from "WorkExperiencePage.js"

import { Route, Switch } from "react-router-dom";

export default function App() {


  return (
    <div>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/work-experience">
          <WorkExperiencePage />
        </Route>
        <Route path="/resume">
          <ResumePage />
        </Route>
        <Route path="/">
          <MainLandingPage />
        </Route>
      </Switch>
    </div>
  );
}
