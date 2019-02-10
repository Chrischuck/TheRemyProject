import React from 'react'
import { navigate } from '@reach/router'
import Landingsvg from '../../svg/landing'

class Landing extends React.Component {
  onClick = () => {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      navigate('/order')
      return
    }
    localStorage.setItem('from_landing', true)
    navigate('/onboarding')
  }

  render() {
    const { isLoggedIn } = this.props
    
    return (
      <div className='landing-parent'>

        <div className='landing-content'>
          <h1 style={{fontSize: '4em'}}>Friends don't let friends waste. Recycle. </h1>
          <p style={{fontSize: '25px', marginTop: '0px', marginBottom: '30px'}}>The leading service to deliver and recycle your LaCroix</p>
          <a onClick={this.onClick} style={{margin: '0', width: '170px'}} className='round-button'>
            {
              isLoggedIn ? 'Order Now' : 'Get Started'
            }
          </a>
        </div>

        <div className='landing-svg'>
        <Landingsvg/>
        </div>

      </div>
    )
  }
}

export default Landing;