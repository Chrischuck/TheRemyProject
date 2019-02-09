import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';
import Loadable from 'react-loadable';

import './index.css'

import Loading from '../components/loading'

const Landing = Loadable({
  loader: () => import('../routes/landing'),
  loading: Loading,
});

import Header from '../components/header'

export default class extends React.Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Router style={{display: 'flex', flex: 1}}>
          <Landing path='/' />
          
        </Router>
      </Fragment>
    )
  }
}
