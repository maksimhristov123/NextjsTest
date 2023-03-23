import styled from "styled-components";
import { Card } from "~/collections";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionInnerHeading } from "~/components";

export const StyledContainer = styled(({ height,  ...props }) => <SectionContainer {...props} />)`
  position: relative;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (min-width:1024px){
    max-width: 63%;
  }
`;

export const StyledHeading = styled((props) => <div {...props}/>)`
  width:100%;
  text-align: center;
`

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  position: relative;
  z-index: 2;
  font-size: 2rem;
  line-height: 1;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 9px 0 50px 0;
  line-height:1;
  font-size: 1rem;
  position: relative;
  z-index: 2
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  position: relative;
  z-index:2;
  width: 80%;

  @media (min-width:1024px){
    width: 50%;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  position: relative;
  width: 50%;
  margin-right: 80px;
  max-width:  37%;
  z-index:1;

  @media (min-width:1024px){
    width: 50%;
  }
`;

export const StyledCard = styled(({...props}) => <Card {...props} />)`
`;

