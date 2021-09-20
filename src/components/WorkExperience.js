import React from "react";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import tw from "twin.macro";

const Heading = tw(HeadingBase)`text-left text-xl leading-snug`;
const SubHeading = tw(HeadingBase)`text-left text-sm leading-snug`;


class WorkExperience extends React.Component {
  render() {
    return (
      <div style={{"height": "auto", "min-width":"100%", "margin-bottom": "30px"}}>
        <img src={this.props.image} width="100px" align="left" style={{"margin-right":"15px"}}/>
        <Heading>{this.props.company}</Heading>
        <SubHeading>{this.props.title}</SubHeading>
        {this.props.desc}
      </div>
    )
  }
}

export default WorkExperience;
