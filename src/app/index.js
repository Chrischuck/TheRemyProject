import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';
import Loadable from 'react-loadable';

import './index.css'

import Loading from '../components/loading'

const Landing = Loadable({
  loader: () => import('../routes/landing'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('../routes/notFound'),
  loading: Loading,
});

import Header from '../components/header'

export default class extends React.Component {
  constructor(props) {
    super(props)
    const cart = window.localStorage.getItem('cart') 
    this.state = {
      cart: cart ? JSON.parse(cart) : null,
      address: '',
      isLoggedIn: !!window.localStorage.getItem('email')
    }
  }

  setCart = (item) => {
    if (item) {
      window.localStorage.setItem('cart', JSON.stringify(item))
    } else {
      window.localStorage.setItem('cart', '')
    }
    this.setState({ cart: item })
  }

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = () => {
    this.setState({ isLoggedIn: true })
  }

  logout = () => {
    window.localStorage.setItem('email', '')
    this.setState({ isLoggedIn: false })
    navigate('/login')
  }

  render() {
    const { cart, address, isLoggedIn } = this.state
    return (
      <Fragment>
        <Header isLoggedIn={isLoggedIn} />
        <Router style={{display: 'flex', flex: 1}}>
          <Landing path='/' />
          
          <NotFound default />
        </Router>
      </Fragment>
    )
  }
}
