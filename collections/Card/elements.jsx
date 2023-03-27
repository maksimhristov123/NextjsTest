import styled from 'styled-components'
import { SectionHeading, SectionParagraph } from '~/components'

export const StyledCardWrapper = styled(({ ...props }) => <div {...props} />)`
  width: 85%;

  :nth-of-type(2n) {
    width: 94%;
  }

  :nth-of-type(3n) {
    width: 100%;
  }
`

export const StyledCard = styled(({ sectionWidth = 0, ...props }) => (
  <div {...props} />
))`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  margin-top: 19px;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    border: 1px solid blue;
  }

  :hover h2 {
    color: blue;
    text-decoration: underline;
  }
`

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  position: relative;
  min-width: 50px;
  height: 50px;
  margin: 20px 40px 20px 0px;
`

export const StyledCardBodyContainer = styled(({ ...props }) => (
  <div {...props} />
))``

export const StyledHeading = styled((props) => <SectionHeading {...props} />)`
  margin-top: 0;
  margin-bottom: 3px;
  line-height: 1;
  font-size: 16px;
`

export const StyledCardText = styled((props) => (
  <SectionParagraph {...props} />
))`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
`
