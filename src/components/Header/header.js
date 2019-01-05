import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

const Header = () => (
  <StyledHeader>
    <StyledHeading>
      <StyledLink
        to="/"
      >
        Home
      </StyledLink>
    </StyledHeading>
  </StyledHeader>
)

export default Header

const StyledHeader = styled.div`
  background: black;
  color: white;
  display: flex;
  width: 100%;
`

const StyledHeading = styled.h2`
  margin: 0;
  padding: 8px 16px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`