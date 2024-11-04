import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne } from './Data';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from '../../components/InfoSection/InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const homeObjOne = {
    lightBg: true,
    lightText: false,
    lightTopLine: true,
    lightTextDesc: false,
    topLine: 'Sign up Today',
    headline: 'Join now for a 30-day free trial',
    description:
      'Get access to all the features and only start the paid subscription once you are happy with the application.',
    phoneButtonLabel: '0470324601',
    emailButtonLabel: 'contact.aliqasimi@gmail.com',
    imgStart: '',
    img: require('../../images/signup-photo.jpg'),
    alt: 'Sign Up Photo'
  };
  return (
    <>
      <InfoSec lightBg={homeObjOne.lightBg}>
        <Container>
          <InfoRow imgStart={homeObjOne.imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={homeObjOne.lightTopLine}>{homeObjOne.topLine}</TopLine>
                <Heading lightText={homeObjOne.lightText}>{homeObjOne.headline}</Heading>
                <Subtitle lightTextDesc={homeObjOne.lightTextDesc}>{homeObjOne.description}</Subtitle>
                <a href="tel:+61470324601">
                  <Button big fontBig primary={true} style={{justifyContent: "center"}}>
                    {homeObjOne.phoneButtonLabel}
                  </Button>
                </a>
                <a href="mailto:contact.aliqasimi@gmail.com">
                  <Button big fontBig primary={true} style={{marginTop: "10px", justifyContent: "center"}}>
                    {homeObjOne.emailButtonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={true}>
                <Img src={homeObjOne.img} alt={homeObjOne.alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default SignUp;