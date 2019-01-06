import React from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/seo';

const Event = () => {
  return (
    <Layout>
      <SEO title="event" tags={["music", "event", "paulette"]} />
      <h1>Paulette</h1>
    </Layout>
  )
};

export default Event;
