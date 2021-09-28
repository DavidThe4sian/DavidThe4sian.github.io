import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import PDF from "components/PDF.js";
import tw from "twin.macro";
import { LogoLink } from "components/headers/light.js";
import { Link } from "react-router-dom";
import { pdfjs } from 'react-pdf';
import Footer from "components/Footer.js";

import "customcss.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const HeroRow = tw(Row)`max-w-full flex-col justify-between items-center py-20 lg:py-24 mx-auto`;


export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  // React.useEffect(() => {
  //   var iframe = document.createElement("iframe");
  //   iframe.style.display = "none";
  //   iframe.src = downloadUrl
  //   document.body.appendChild(iframe);
  // }, [])

  return (
    <div>
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
          <HeroRow>
            <PDF/>
          </HeroRow>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
    <Footer/>
    </div>
  );
};
