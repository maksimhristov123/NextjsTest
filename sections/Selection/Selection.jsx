import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledHeading,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCard
} from "./elements";

export const Selection = ({image, title, description, videoImage, cards, ...props}) => {
    // console.log(cards)
    return (
        <StyledContainer {...props}>

            <StyledHeading {...props}>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledHeading>

            <Image layout="fill" src={image.src} alt={image.alt} objectFit="cover" />

            <StyledImageContainer>
                <Image layout="responsive" src={videoImage.src} alt={videoImage.alt} width={videoImage.width} height={videoImage.height}/>
            </StyledImageContainer>

            <StyledTextContainer>
                    {cards.map((card) => {

                            return <StyledCard key={card.id} title={card.title} url={card.url} logo={card.logo} description={card.description}/>
                        
                        }
                    )}
            </StyledTextContainer>
            
        </StyledContainer>
    );
}

