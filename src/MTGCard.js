import React from 'react'
import PropTypes from 'prop-types'
import CastingCost from './Cost.js'
import {
  CardRoot,
  Background,
  Frame,
  TypeLine,
  BigWords,
  Art,
  MiddleTypeLine,
  SetIcon,
  TextBox,
  P,
  FlavorText,
  Footer,
  BottomLeft,
  BottomCenter,
  BottomRight,
  Description,
  Title,
} from './styles'
import '@saeris/typeface-beleren-bold'
import 'mana-font'

export const cardColors = ['blue', 'red', 'green', 'white', 'black']

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
            <Title>{title}</Title>
            {cost && <CastingCost cost={cost} />}
          </TypeLine>
          <Art image_url={image_url} alt="art" color={color} />

          <MiddleTypeLine color={color}>
            <BigWords>{type}</BigWords>
            <SetIcon src={set_url} alt="OGWIcon" />
          </MiddleTypeLine>

          <TextBox color={color}>
            {text ? <Description>{text}</Description> : null}
            {textN
              ? textN.map((desc, idx) => {
                  return <Description key={idx}>{desc}</Description>
                })
              : null}
            {flavor ? <FlavorText>{flavor}</FlavorText> : null}
          </TextBox>

          <Footer>
            <BottomLeft>
              140/184 R<P>OGW &#x2022; EN Wesley Burt</P>
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
