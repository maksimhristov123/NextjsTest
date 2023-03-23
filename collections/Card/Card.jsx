import Image from "next/image";
import { StyledCardWrapper, StyledCard, StyledImageContainer, StyledCardBodyContainer, StyledCardText, StyledHeading } from "./elements";

export const Card = ({ children, ...props }) => {
    return (
        <StyledCardWrapper>
           <StyledCard {...props}>
                <StyledImageContainer>
                    <Image layout="fill" src={props.logo.src} alt={props.logo.alt} objectFit = "contain"/>
                </StyledImageContainer>

                <StyledCardBodyContainer>
                    <StyledHeading>{props.title}</StyledHeading>
                    <StyledCardText >{props.description}</StyledCardText>
                </StyledCardBodyContainer>
            </StyledCard> 
        </StyledCardWrapper>
    )
}

