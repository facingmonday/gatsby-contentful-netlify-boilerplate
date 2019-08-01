import React, { Component } from 'react';
import s from './Button.scss';

class Button extends Component {
  render() {
    const { href, label } = this.props;
    return (
      <a href={href} className={s.button}>
        {label}
      </a>
    );
  }
}

export default Button;