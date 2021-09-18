import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import PDF from "components/PDF.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import GitHubButton from "react-github-btn";

import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';

import logo from "images/logo.svg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;
const Description = tw(DescriptionBase)`mt-4 text-center lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const downloadUrl = "/treact-ui.zip"
  React.useEffect(() => {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = downloadUrl
    document.body.appendChild(iframe);
  }, [])

  return (
    <AnimationRevealPage disabled>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
        <NavRow>
          <LogoLink href="/">
            {/*<img src={logo} alt="" />*/}
            David Ma
          </LogoLink>
          <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
            <NavLink href="/">
              Home
            </NavLink>
            <NavLink as={Link} to="/work-experience">
              Work Experience
            </NavLink>
            <NavLink as={Link} to="/contact-me">
              Contact Me
            </NavLink>
            <div tw="md:hidden flex-100 h-0"></div>

          </div>
        </NavRow>
          <HeroRow>
            <Heading>Thank You!</Heading>
            <br/>
            <p>Thanks for stopping by! If you have any questions, comments, or want to reach out to me for any other reason, </p>
            <br/>
            {/*<Document file="resume.pdf" onLoadError={console.error} onLoadSuccess={(pdf) => alert('Loaded a file with ' + pdf.numPages + ' pages!')}>
            </Document>*/}
            <PDF/>
            {/* <iframe src="./images/resume.pdf" width="100%" height="500px"></iframe> */}
          </HeroRow>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
