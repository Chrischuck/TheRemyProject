import React from 'react'
import Landingsvg from '../../svg/landing'

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-parent'>
        <div className='landing-content'>
          <h1>Headline</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='landing-svg'>
        <Landingsvg/>
        </div>
      </div>
    )
  }
}

export default Landing;