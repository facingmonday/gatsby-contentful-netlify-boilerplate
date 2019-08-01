import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UIProvider } from 'context/ui';

import Header from 'containers/Header';
import Footer from 'containers/Footer';

import './Layout.scss';

export default class AppLayout extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  }

  static defaultProps = {
    children: null,
  }

  componentDidMount() {
    document.querySelector('html').classList.remove('no-js');
  }

  render() {
    const { children } = this.props;
    return (
      <UIProvider>
        <Header />
        {children}
        <Footer />
      </UIProvider>
    );
  }
}
