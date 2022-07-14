import React from 'react';

// Template
import SiteTemplate from '../templates/SiteTemplate';

// Components
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

function Home() {
  return (
    <SiteTemplate>
        <Header />
        <SocialMedia/>
    </SiteTemplate>
  )
}

export default Home;