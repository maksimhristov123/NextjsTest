import Image from 'next/image'
import Link from 'next/link'

import {
  StyledTextContainer,
  StyledContainer,
  StyledHeading,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCard,
  SectionContainerWrapper,
} from './elements'

export const Selection = ({
  image,
  title,
  description,
  videoImage,
  cards,
  ...props
}) => {
  // console.log(cards)
  return (
    <SectionContainerWrapper {...props}>
      <Image layout="fill" src={image.src} alt={image.alt} objectFit="cover" />
      <StyledContainer {...props}>
        <StyledHeading {...props}>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledHeading>

        <StyledImageContainer>
          <Image
            layout="responsive"
            src={videoImage.src}
            alt={videoImage.alt}
            width={videoImage.width}
            height={videoImage.height}
          />
        </StyledImageContainer>

        <StyledTextContainer>
          {cards.map((card) => {
            return (
              <Link key={card.id} href={`${card.url}`}>
                <StyledCard
                  title={card.title}
                  logo={card.logo}
                  description={card.description}
                />
              </Link>
            )
          })}
        </StyledTextContainer>
      </StyledContainer>
    </SectionContainerWrapper>
  )
}
