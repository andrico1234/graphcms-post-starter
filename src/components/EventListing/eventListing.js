import React from 'react'

import CardList from '../CardList/cardList'
import SplitButton from '../SplitButton/splitButton'

class EventListing extends React.Component {
  state = {
    activeItem: 'right',
  }

  handleClick = buttonSide => {
    this.setState({
      activeItem: buttonSide,
    })
  }

  render() {
    const { activeItem } = this.state
    const { data } = this.props

    return (
      <>
        <SplitButton activeItem={activeItem} handleClick={this.handleClick} />
        <CardList data={data} />
      </>
    )
  }
}

export default EventListing
