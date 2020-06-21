import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ManaIcon = styled.i`
  width: 1.3em;
`

const Cost = styled.div`
  font-size: 1.2em;
  padding: 0 3px 0 0;
`

const getName = (cost) => {
  return `ms ms-${cost} ms-cost ms-shadow`
}

export const CastingCost = ({ cost }) => {
  const c = cost.split('')
  console.log('cost', cost, 'c', c)
  return (
    <Cost>
      {c.map((symbol, idx) => {
        return <ManaIcon key={`mana-${idx}`} className={getName(symbol)} />
      })}
    </Cost>
  )
}

CastingCost.propTypes = {
  cost: PropTypes.string,
}
export default CastingCost
