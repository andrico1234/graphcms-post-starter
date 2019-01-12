import React from 'react'
import styled from 'styled-components'
import {
  David,
  Eva,
  Jacks,
  Jaime,
  Kirstie,
  Paul,
  Sonja,
} from '../images/profile-pictures'
import TeamMember from '../components/TeamMember/teamMember'
import Layout from '../components/Layout/layout'
import SEO from '../components/Seo/seo'

const imagesArray = [David, Eva, Jacks, Jaime, Kirstie, Paul, Sonja]

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="Meet the team" />
      <StyledHeader>Meet the team</StyledHeader>
      <MemberContainer>
        {imagesArray.map(image => (
          <TeamMember profilePic={image} />
        ))}
      </MemberContainer>
    </Layout>
  )
}

export default TeamPage

const StyledHeader = styled.h1`
  color: white;
  padding-left: 16px;
`

const MemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`