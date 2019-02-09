import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';
import Loadable from 'react-loadable';

import './index.css'


import Header from '../components/header'

export default class extends React.Component {

  render() {
    return (
      <Fragment>
        <Header isLoggedIn={isLoggedIn} cart={cart} logout={this.logout} />
        <Router style={{display: 'flex', flex: 1}}>
          <div path='/' >hi</div>
          
        </Router>
      </Fragment>
    )
  }
}
