import React from 'react'
import Card from './MTGCard'
import CssReset from './styles.js'
export { default as CastingCost } from './Cost'

const MTGCard = (props) => {
  return (
    <React.Fragment>
      <CssReset />
      <Card {...props} />
    </React.Fragment>
  )
}

export default MTGCard
