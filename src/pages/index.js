import React from 'react'
import Link from 'gatsby-link'
import SpaceSVG from './space.svg';

import './index.css';

const IndexPage = () => (
  <div>
    <div id="hero">
      <img src={SpaceSVG} />
      <div className="hero__content">
        <h1>Mason Bourgeois</h1>
        <p className="hero__subtitle">
          Web Developer Extraordinaire
        </p>
      </div>
    </div>
    <h1>Projects</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
