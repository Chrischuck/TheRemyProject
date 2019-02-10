import React from 'react'
import Landingsvg from '../../svg/landing'

class Landing extends React.Component {
  render() {
    return (
      <div style={{padding: '20px'}} className='landing-parent'>
        <div className='landing-content'>
          <h1 style={{fontSize: '4em', margin: '5px 0'}}>Friends don't let friends waste. Recycle. </h1>
          <p style={{fontSize: '25px'}}>The leading service to deliver and recycle your LaxCroix</p>
          <a style={{margin: '0', width: '170px'}} className='round-button'>Get Started</a>
        </div>
        <div className='landing-svg'>
        <Landingsvg/>
        </div>
      </div>
    )
  }
}

export default Landing;