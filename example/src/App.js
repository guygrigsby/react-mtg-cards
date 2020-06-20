import React from 'react'
import styled from 'styled-components'
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

const premades = [
  {
    image_url: 'https://i.redd.it/sw8xl7bxutk31.jpg',
    set_url:
      'https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=EVE&size=small&rarity=C',
    color: 'blue',
    title: 'Banishing Knack',
    text: `Until end of turn, target creature gains "{tap}: Return target nonland permanent to its owner's hand."`,
    type: 'Instant',
    flavor: `Suddenly he realized that everything was connected by invisible strings, strings that could be pulled—or cut.`,
  },
  {
    image_url:
      'https://magicuntapped.com/media/k2/items/cache/e2bf3b11df0b872112757f1c2fee6e32_XL.jpg',
    set_url:
      'https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=2U&size=small&rarity=R',
    color: 'none',
    title: 'Black Lotus',
    text: 'Sacrifice Black Lotus: Add three mana of any one color.',
    type: 'Artifact',
  },
  {
    image_url:
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pahoeoe_fountain_edit2.jpg',
    set_url: 'https://image.ibb.co/kzaLjn/OGW_R.png',
    color: 'red',
    title: 'Lavaflow',

    type: 'Basic Land - Mountain',
  },
  {
    image_url: 'https://image.ibb.co/fqdLEn/nissa.jpg',
    set_url: 'https://image.ibb.co/kzaLjn/OGW_R.png',
    color: 'green',
    title: 'Oath of Nissa',
    text:
      'When Oath of Nissa enters the battlefield, look at the top three cards of your library. You may reveal a creature, land, or planeswalker card from among them and put it into your hand. Put the rest on the bottom of your library in any order.',
    textN: [
      'You may spend mana as though it were mana of any color to cast planeswalker spells.',
    ],
    flavor: 'For the life of every plane, I will keep watch.',
    cost: 'g',
    type: 'Legendary Enchantment',
  },
  {
    image_url:
      'https://media.gettyimages.com/photos/donkey-on-laughing-on-field-against-dry-plants-picture-id667764513?s=612x612',
    set_url: 'https://image.ibb.co/kzaLjn/OGW_R.png',
    color: 'black',
    title: 'Desecration of Donkeys',
    text:
      'Desecration of Donkeys enters the battlefield with 7 desecration counters on it. Each upkeep, remove a counter. When there are zero counters left, you sacrifice all your creatures.',
    textN: [
      'Each time you tap a Swamp for mana, add an extra black mana and create a 2/2 Rabbit Donkey token.',
    ],
    flavor:
      '"Beasts of burden indeed. Our burden becomes yours." ~ Dratz the Old',
    cost: '2pp',
    type: 'Legendary Enchantment',
  },
]

const initialState = premades[3]

const App = () => {
  const [cardState, setCardState] = React.useState(initialState)

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
        <MTGCard {...cardState} />
      </Container>
      <Item>Foot for room</Item>
    </Container>
  )
}

export default App
