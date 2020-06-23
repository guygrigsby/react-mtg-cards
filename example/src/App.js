import React from 'react'
import styled from 'styled-components'
import { premades } from './premades.js'
import htmlToImage from 'html-to-image'
import download from 'downloadjs'
import MTGCard, { cardColors } from 'react-mtg-cards'

const TextBox = styled.textarea`
  border: ridge 2px;
  width: 25em;
  min-height: 5em;
  overflow: auto;
`

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: stretch;
`

const Item = styled.div`
  flex: 1;
  margin: 1em;
`
const createPNG = (title, node) => {
  const options = {
    styles: {
      width: '500px',
      height: '700px',
    },
  }
  console.log('node', node)
  htmlToImage.toPng(node, options).then(function (dataUrl) {
    var img = new Image()
    img.src = dataUrl
    document.body.appendChild(img)
    download(dataUrl, `${title}.png`)
    return <img width="100" height="200" src={dataUrl} alt={`card "${title}`} />
  })
}

const initialState = premades[3]

const App = () => {
  const [cardState, setCardState] = React.useState(initialState)
  const [jpg, setJpg] = React.useState(null)
  const cardRef = React.useRef()

  const update = (e) => {
    const key = e.target.name
    let val = e.target.value
    console.log('update', key, 'value', val)
    if (key === 'textN') val = [val]
    if (key === 'premades') {
      console.log(
        'update premade key',
        key,
        'value',
        val,
        'entry',
        premades[val],
      )
      setCardState(premades[val])
      return
    }

    setCardState((prevState) => {
      return { ...prevState, ...{ [key]: val } }
    })
  }

  console.log('cardState', cardState)

  console.log('ref after create ', cardRef)

  return (
    <Container
      style={{
        flexDirection: 'column',
        alignItems: 'baseline',
        width: '100%',
        height: '100%',
      }}
    >
      <Container
        style={{
          alignSelf: 'center',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignContent: 'flex-start',
          flex: '1 1 auto',
          flexFlow: 'row wrap',
          width: '100%',
        }}
      >
        <Item>
          <label>Color</label>
          <br />
          <select
            value={cardState.color}
            name="color"
            id="colors"
            onChange={update}
          >
            {cardColors.map((color, idx) => {
              return (
                <option key={`${idx}-${color}`} value={color}>
                  {color}
                </option>
              )
            })}
          </select>
        </Item>
        <Item>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            size="50"
            value={cardState.title}
            onChange={update}
          />
        </Item>
        <Item>
          <label>Casting Cost</label>
          <br />
          <input
            type="text"
            name="cost"
            value={cardState.cost}
            onChange={update}
          />
        </Item>
        <Item>
          <label>Type</label>
          <br />
          <input
            type="text"
            name="type"
            value={cardState.type}
            onChange={update}
          />
        </Item>
        <Item>
          <label>Image URL</label>
          <br />
          <input
            type="url"
            size="50"
            name="image_url"
            value={cardState.image_url}
            onChange={update}
          />
        </Item>
        <Item>
          <label>Text P1</label>
          <br />
          <TextBox
            name="text"
            value={cardState.text === undefined ? '' : cardState.text}
            onChange={update}
          />
        </Item>
        <Item>
          <label>Text N</label>
          <br />
          <TextBox
            name="textN"
            value={cardState.textN === undefined ? '' : cardState.textN}
            onChange={update}
          />
        </Item>
        <Item>
          <label>Flavor</label>
          <br />
          <TextBox
            name="flavor"
            value={cardState.flavor === undefined ? '' : cardState.flavor}
            onChange={update}
          />
        </Item>
        <Item>
          <label>Premade Cards</label>
          <br />
          <select name="premades" id="premades-cards" onChange={update}>
            {premades.map((card, idx) => {
              return (
                <option key={`${idx}-premades`} value={idx}>
                  {card.title}
                </option>
              )
            })}
          </select>
        </Item>
        <Item>
          <button
            onClick={() => setJpg(createPNG(cardState.title, cardRef.current))}
          >
            Download
          </button>
        </Item>
      </Container>
      <Container
        style={{
          flexDirection: 'column',
          alignItems: 'baseline',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <MTGCard ref={cardRef} {...cardState} />
      </Container>
      <Item>{jpg}</Item>
    </Container>
  )
}

export default App
