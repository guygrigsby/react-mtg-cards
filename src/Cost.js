import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ManaIcon = styled.i`
  font-size: 1.1em;
  flex: 0 0 auto;
  margin: 3px 3px 0 3px;
`

const Cost = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  align-content: stretch;
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
