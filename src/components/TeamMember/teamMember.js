import React from 'react'
import styled from 'styled-components'

const TeamMember = ({ profilePic }) => {
  return (
    <MemberContent>
      <ContentWrapper>
        <Image src={profilePic} />
        <Description>
          <p>Hey there</p>
        </Description>
      </ContentWrapper>
    </MemberContent>
  )
}

export default TeamMember

const MemberContent = styled.div`
  text-align: center;
  width: 350px;
`

const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 200px;
`

const Image = styled.img`
  transition: all 0.2s linear;
  width: 200px;

  &:hover {
    transform: scale(1.1);
    opacity: 0.3;
  }
`

const Description = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`
