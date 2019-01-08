import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout/layout'
import SEO from '../components/Seo/seo'
import BandImage from '../images/band-image.jpg'

const Event = () => {
  return (
    <Layout>
      <SEO title="event" tags={["music", "event", "paulette"]} />
      <Background/>
      <ContentContainer>
        <StaticContent>
          <h1>Paulette</h1>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <button>
            Buy Tickets
          </button>
        </StaticContent>
        <Description>
          Hey theeree
        </Description>
      </ContentContainer>
    </Layout>
  )
}

export default Event;

const ContentContainer = styled.div`
  display: flex;
  wrap: no-wrap;
`

const StaticContent = styled.div`
  color: white;
  flex-grow: 1;
  margin-left: 16px;
  max-width: 33%;
`

const Background = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${BandImage});
  background-size: cover;
  background-position: center;
`

const Description = styled.div`
  font-size: 18px;
  flex-grow: 2;
  margin: 32px 16px;
`