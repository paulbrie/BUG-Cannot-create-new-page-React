import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div data-animate-on-reveal="false" className="home-container">
      <Helmet>
        <title>BUG: Cannot create new page</title>
        <meta property="og:title" content="BUG: Cannot create new page" />
      </Helmet>
      <span>
        <span>{/*locale-text_vhp1nN*/}</span>
      </span>
    </div>
  )
}

export default Home
