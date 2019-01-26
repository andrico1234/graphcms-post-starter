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

const data = [
  {
    name: 'David',
    profilePicture: David,
    role: 'Organiser',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Eva',
    role: 'Project manager',
    profilePicture: Eva,
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Jacks',
    profilePicture: Jacks,
    role: 'Co-founder',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Jaime',
    profilePicture: Jaime,
    role: 'MC',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Kirstie',
    profilePicture: Kirstie,
    role: 'Project Manager',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Paul',
    profilePicture: Paul,
    role: 'Social media manager',
    gardenPartyHistory: '12 Months',
  },
  {
    name: 'Sonja',
    profilePicture: Sonja,
    role: 'Co-founder',
    gardenPartyHistory: '12 Months',
  },
]

const TeamPage = () => {
  return (
    <Layout>
      <StyledHeader>Meet the team</StyledHeader>
      <MemberContainer>
        {data.map(person => (
          <TeamMember data={person} />
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
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-content: space-around;
`

