import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/Layout/layout'
import Heading from '../components/Heading/heading';
import EventListing from '../components/EventListing/eventListing'
import SEO from '../components/Seo/seo'
import GardenImage from '../images/garden.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledImage src={GardenImage} alt="Photo by Scott Webb on Unsplash"/>
    <Heading title="Garden Party" />
    <EventListing />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/team/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

const StyledImage = styled.img`
  position: absolute;
  top: 42px;
  width: 100%;
  z-index: -1;
`
