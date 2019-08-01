import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UIProvider } from 'context/ui';

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

import s from './Page.scss';

export default class Page extends Component {

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
        <div className={s.main__container}>
          <Header />
          <div className={s.main__body}>
            { children }
          </div>
          <div className={s.main__footer}>
            <Footer />
          </div>
        </div>
      </UIProvider>
    );
  }
}
