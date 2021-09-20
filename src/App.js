import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ResumePage from "ResumePage.js";
import WorkExperiencePage from "WorkExperiencePage.js"

// import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";

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
