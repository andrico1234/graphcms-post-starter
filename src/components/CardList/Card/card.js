import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledCard>
      <div>
        Card Image
      </div>
      <div>
        Card Data
      </div>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`