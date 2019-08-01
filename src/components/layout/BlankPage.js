import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UIProvider } from 'context/ui';

export default class BlankPage extends Component {

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
        <div style={{ backgroundColor: 'white' }}>
          { children }
        </div>
      </UIProvider>
    );
  }
}
