import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import Image from 'react-bootstrap/Image'

import { SocialIcon } from 'react-social-icons';

import { Link } from "react-router-dom";


import logo from "images/body.png";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;

const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
// const Image = tw.img`max-w-full rounded-t sm:rounded`;


export default ({
  features = null,
  buttonRoundedCss = "",
  heading = "Hi, I'm David",
  description = "I'm a Master's student studying Computer Science at the University of Minnesota (expected graduation May 2022). I'm interested in a wide range of work, from software engineering to machine learning. Above all, I'm looking for opportunities to grow, personally and professionally. Welcome to my page!"
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  // const request = require('request');
  // console.log("asdf");
  // request.get("https://api.isevenapi.xyz/api/iseven/6/").on('response', function(response) {
  // 	console.log(response)
	// });

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-white -mx-8 -mt-8 pt-8 px-8">
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
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <br/>
              <span>
                <SocialIcon url="https://www.linkedin.com/in/david-ma-8551b39b/" style={{"margin": "10px", "margin-left": "0px"}}/>
                <SocialIcon url="mailto:maxxx818@umn.edu" style={{"margin-right": "10px"}}/>
                <SocialIcon url="https://github.com/davidthe4sian" style={{"margin-right": "10px"}}/>
              </span>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={logo} roundedCircle />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
