import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";

import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { Link } from "react-router-dom";

import WorkExperience from "components/WorkExperience.js"

import "customcss.css";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;

const Heading = tw(HeadingBase)`text-left text-3xl leading-snug`;

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  let amazonDesc = (<ul>
    <li>Independently built a full stack project to store and retrieve Alexa data
</li>
    <li>Coded a Java software package to facilitate writing data to a secure internal database at runtime
</li>
    <li>Built a front-end stack to query data and display it in a UI using React and various AWS resources (CDK, S3, API Gateway, Lambda, Cognito, CloudFront)
</li>
  </ul>);

  let securianDesc = (<ul>
    <li>Collaborated on an agile team with five employees to develop components for the Securian website under Adobe Experience Manager (AEM)
</li>
    <li>Developed code in both the frontend and backend of AEM, utilizing software development tools such as Git and Jenkins
</li>
    <li>Took initiative and worked independently on projects such as a search suggester, scripts to iterate through the website, and a component to automatically display upcoming events
</li>
  </ul>);

  let optumDesc = (<ul>
    <li>Utilized graph database technology and machine learning to model social determinants of health and predict health outcomes
</li>
    <li>Used Synthea, an open source library, to generate a sample patient population to use for data manipulation
</li>
    <li>Led work with data analysis on specific social determinants and sections of the graph schema on a team of nine employees and interns
</li>
  </ul>);

  return (
    <AnimationRevealPage disabled>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
        <NavRow>
          <LogoLink href="/">
            <img src="david_name.png" alt="" />
          </LogoLink>
          <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
            <NavLink href="/">
              Home
            </NavLink>
            <NavLink as={Link} to="/work-experience">
              Work Experience
            </NavLink>
            <NavLink as={Link} to="/resume">
              Resume
            </NavLink>
            <div tw="md:hidden flex-100 h-0"></div>

          </div>
        </NavRow>
          <br/>
          <Heading>Work Experience</Heading>
          <br/>
          <WorkExperience image="amazon_icon.png" company="Amazon" title="Software Development Engineer Intern "desc={amazonDesc}/>
          <WorkExperience image="securian.png" company="Securian" title="Software Development Intern "desc={securianDesc}/>
          <WorkExperience image="optum.png" company="Optum (UnitedHealth Group)" title="Technology Development Program Intern "desc={optumDesc}/>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
