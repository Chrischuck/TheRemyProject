import React from 'react';

import AWS from '../../utils/aws'

import lacroixMap from '../../utils/lacroixMap'

const Card = ({ lacroix }) => (
  <div className='checkout-box' style={{ marginBottom: '10px'}}>
    <div className='item-words' style={{display:'block'}}>
      <h3 className='item-title'>{lacroix.name}</h3> 
      <p className='item-desc'>{lacroix.description}</p>
      <a className='round-button' style={{ position: 'absolute', fontWeight: 'bold', padding: '7px 30px' }}>Pickup</a>
    </div>
    <div className='item-image-container'>
      <img style={{height: '110px', width: '110px' }} src={lacroix.img} />
    </div>
  </div>
)

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: ['pure', 'lime']
    }
  }

  componentDidMount() {
    // do db call here
  }

  renderLacroix = () => {
    const { current } = this.state

    return current.map(c => lacroixMap[c]).map(c => <Card lacroix={c} />)
  }
  
  render() {
    return (
      <div className='order-parent'>
        <div className='order-header' style={{paddingBottom: '12px'}}>
          <div style={{ width: '70%', margin: 'auto'}}>
            <h1>Current LaCroix</h1>
            <p></p>
          </div>
        </div>

      <div className='checkout-section-parent'>
        <h4>Drink List</h4>
        { this.renderLacroix() }
      </div>

      </div>
    )
  }
}