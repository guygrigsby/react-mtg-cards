import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CastingCost from './Cost.js'
import greenBG from './bg/green.png'
import blueBG from './bg/blue.png'
import redBG from './bg/red.png'
import blackBG from './bg/black.png'
import whiteBG from './bg/white.png'
import './styles.css'

export const cardColors = ['blue', 'red', 'green', 'white', 'black']

const green = '#336600'
const blue = '#1a53ff'
const red = '#cc0000'
const black = '#171314'
const white = 'white'

const BottomLeft = styled.div`
  flex: 1;
  font-size: 10px;
  position: relative;
  top: 6px;
  p:first-of-type {
    margin-bottom: 1px;
  }
`

const BottomRight = styled.div`
  flex: 1;
  text-align: right;
  font-size: 10px;
  position: relative;
  top: 6px;
`
const BottomCenter = styled.div`
  border-radius: 60%;
  flex-basis: 41px;
  height: 21px;
  position: relative;
  bottom: 11px;
  z-index: 2;
  background: lightgray;
  background-image: url(https://image.ibb.co/jyq34n/holofoil_texture_2.jpg);
  box-shadow: 0 0 0 4px #171314;
`

const Description = styled.p``

const Footer = styled.div`
  margin: 5px 4px 0 4px;
  color: white;
  display: flex;
  justify-content: space-between;
`
const P = styled.p`
  margin-bottom: 5px;
`
const FlavorText = styled.p`
  font-style: italic;
  padding: 10px 0;
`
const BigWords = styled.h1`
  font-size: 1.3em;
  margin: 5px 0 5px 5px;
  font-weight: 600;
`
const SetIcon = styled.img`
  height: 25px;
  overflow: hidden;
  margin-right: 10px;
  align-self: center;
`
const CardRoot = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  margin-top: 56px;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: -8px 9px 16px -3px gray;
  background: #171314;
  body* > {
    box-sizing: border-box;
  }
`

const Frame = styled.div`
  z-index: 1;
  position: relative;
  height: 108%;
  max-width: 97%;
  left: 1%;
  top: 0.5%;
  left: 1.2%;
  display: flex;
  flex-direction: column;
`
//background-image: url(https://image.ibb.co/e1XKAS/green_background.jpg);
//background-image: url(../images/bg/${(props) => props.color}.png);
const Background = styled.div`
  height: 600px;
  margin: 20px 20px 0 20px;
  background-image: url(${(props) => getBG(props.color)});
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 8%;
  border-bottom-right-radius: 8%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  background-color: ${(props) => props.color};
  z-index: 0;
`

const ImageBox = styled.div`
  display: flex;
  height: 300px;
  width: auto;
  margin: 0 10px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #171314, 0 0 0 5px ${(props) => getCC(props.color)},
    -3px 3px 2px 5px #171314;
`
const Img = styled.img`
  width: 100%;
`
const Art = ({ image_url, color }) => {
  console.log('art', image_url, color)
  return (
    <ImageBox color={color}>
      <Img src={image_url} alt="art" />
    </ImageBox>
  )
}

Art.propTypes = {
  image_url: PropTypes.string,
  color: PropTypes.string,
}

const TextBox = styled.div`
  font-size: 1.1em;
  box-shadow: 0 0 0 5px ${(props) => getCC(props.color)},
    -3px 3px 2px 5px #171314;
  margin: 0 10px;
  background: #d3ded6;
  background-image: url(https://image.ibb.co/dFcNx7/tile_bg_2.jpg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 6px;
  flex: 1 0 auto;
`

const TypeLine = styled.div`
  font-size: 1.1em;
  flex: 1 0 100%
  border-bottom: 4px solid #a9a9a9;
  border-left: 2px solid #a9a9a9;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  box-shadow: 0 0 0 2px #171314, 0 0 0 5px ${(props) => getCC(props.color)},
    -3px 3px 2px 5px #171314;

  margin-bottom: 7px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;

  overflow: hidden;
  background: linear-gradient(
      0deg,
      rgba(201, 216, 201, 0.3),
      rgba(201, 216, 209, 0.3)
    ),
    url(https://image.ibb.co/jKByZn/tile_bg_1.jpg);
  display: flex;
  align-content: flex-start;
  align-items: baseline;
  justify-content: space-between;
  border-radius: 18px/40px;
  z-index: 2;
`

const MiddleTypeLine = styled(TypeLine)`
  margin-top: 0;
`

export const getCC = (color) => {
  switch (color) {
    case 'blue':
      return blue
    case 'red':
      return red
    case 'green':
      return green
    case 'black':
      return black
    case 'white':
      return white
    default:
      return white
  }
}
const getBG = (color) => {
  switch (color) {
    case 'blue':
      return blueBG
    case 'red':
      return redBG
    case 'green':
      return greenBG
    case 'black':
      return blackBG
    case 'white':
      return whiteBG
    default:
      return whiteBG
  }
}

export const MTGCard = ({
  image_url,
  set_url,
  title,
  color,
  text,
  textN,
  flavor,
  cost,
  type,
  onClick,
}) => {
  return (
    <CardRoot color={color}>
      <Background color={color} onClick={onClick}>
        <Frame>
          <TypeLine color={color}>
            <BigWords>{title}</BigWords>
            {cost && <CastingCost cost={cost} />}
          </TypeLine>
          <Art image_url={image_url} alt="art" color={color} />

          <MiddleTypeLine color={color}>
            <BigWords>{type}</BigWords>
            <SetIcon src={set_url} alt="OGWIcon" />
          </MiddleTypeLine>

          <TextBox color={color}>
            {text ? (
              <Description style={{ margin: '5px 1px' }}>{text}</Description>
            ) : null}
            {textN
              ? textN.map((desc, idx) => {
                  return <Description key={idx}>{desc}</Description>
                })
              : null}
            {flavor ? <FlavorText>{flavor}</FlavorText> : null}
          </TextBox>

          <Footer>
            <BottomLeft>
              <P>140/184 R</P>
              <P>OGW &#x2022; EN Wesley Burt</P>
            </BottomLeft>

            <BottomCenter />

            <BottomRight>
              &#x99; &amp; &#169; 2020 Wizards of the Coast
            </BottomRight>
          </Footer>
        </Frame>
      </Background>
    </CardRoot>
  )
}
MTGCard.propTypes = {
  image_url: PropTypes.string,
  set_url: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  textN: PropTypes.arrayOf(PropTypes.string),
  flavor: PropTypes.string,
  cost: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}
export default MTGCard
