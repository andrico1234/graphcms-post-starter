import React from 'react'
import styled from 'styled-components'

import Card from './Card/card';

const CardList = ({ cardData = [1, 2, 3] }) => {
  return (
    <StyledCardList>
      {cardData.map(item => (
        <Card data={item} />
      ))}
    </StyledCardList>
  )
}

export default CardList

const StyledCardList = styled.div`
  display: flex;
`