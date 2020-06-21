import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import greenBG from './bg/green.png'
import blueBG from './bg/blue.png'
import redBG from './bg/red.png'
import blackBG from './bg/black.png'
import whiteBG from './bg/white.png'
import '@saeris/typeface-beleren-bold'

const green = '#336600'
const blue = '#1a53ff'
const red = '#cc0000'
const black = '#171314'
const white = 'white'

export const BottomLeft = styled.div`
  flex: 1;
  font-size: 10px;
  position: relative;
  top: 6px;
  p:first-of-type {
    margin-bottom: 1px;
  }
`

export const BottomRight = styled.div`
  flex: 1;
  font-size: 10px;
  position: relative;
  top: 6px;
  text-align: right;
`
export const BottomCenter = styled.div`
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

export const Description = styled.p`
  font-family: 'Belaren Bold';
  padding: 5px 1px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export const Footer = styled.div`
  margin: 5px 4px 0 4px;
  color: white;
  display: flex;
  justify-content: space-between;
`
export const P = styled.div`
  margin-bottom: 1px;
`
export const FlavorText = styled(Description)`
  font-style: italic;
`
export const BigWords = styled.h1`
  font-family: 'Belaren Bold';
  font-size: 1.3em;
  margin: 5px 0 5px 5px;
  font-weight: 600;
`
export const SetIcon = styled.img`
  height: 25px;
  overflow: hidden;
  margin-right: 10px;
  align-self: center;
`
//${() => cssReset()}
export const CardRoot = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  margin-top: 56px;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: -8px 9px 16px -3px gray;
  background: #171314;
`

export const Frame = styled.div`
  z-index: 1;
  position: relative;
  max-width: 97%;
  left: 1%;
  top: 0.5%;
  left: 1.2%;
  display: flex;
  flex-direction: column;
`
//background-image: url(https://image.ibb.co/e1XKAS/green_background.jpg);
//background-image: url(../images/bg/${(props) => props.color}.png);
export const Background = styled.div`
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

//export const ImageBox = styled.div`
//  display: flex;
//  height: 40%;
//  flex: 1 1 auto
//  width: auto;
//  margin: 0 10px;
//  overflow: hidden;
//  box-shadow: 0 0 0 2px #171314, 0 0 0 5px ${(props) => getCC(props.color)},
//    -3px 3px 2px 5px #171314;
//`
export const Img = styled.img`
  flex: 0 0 48%;
  object-fit: cover;
  overflow: hidden;
  position: relative;
  margin: 0 10px;
  box-shadow: 0 0 0 2px #171314, 0 0 0 5px ${(props) => getCC(props.color)};
`
export const Art = ({ image_url, color }) => {
  console.log('art', image_url, color)
  return <Img src={image_url} color={color} alt="art" />
}

Art.propTypes = {
  image_url: PropTypes.string,
  color: PropTypes.string,
}

export const TextBox = styled.div`
  font-size: 1.2em;
  box-shadow: 0 0 0 5px ${(props) => getCC(props.color)},
    -3px 3px 2px 5px #171314;
  margin: 0 10px;
  background: #d3ded6;
  background-image: url(https://image.ibb.co/dFcNx7/tile_bg_2.jpg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 5px 5px 5px;
  flex: 1 1 auto;
`

export const TypeLine = styled.div`
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

  flex: 0 0 4.5%;

  overflow: hidden;
  background: linear-gradient(
      0deg,
      rgba(201, 216, 201, 0.3),
      rgba(201, 216, 209, 0.3)
    ),
    url(https://image.ibb.co/jKByZn/tile_bg_1.jpg);
  display: flex;
  align-content: flex-start;
  align-items: center;
  justify-content: space-between;
  border-radius: 18px/40px;
  z-index: 2;
`

export const MiddleTypeLine = styled(TypeLine)`
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
export const getBG = (color) => {
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

const Reset = styled.div`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;

  /* End of reset */

  body* > {
    box-sizing: border-box;
  }
`

/* Reset */
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
 */
export const CssReset = () => {
  return <Reset />
}
