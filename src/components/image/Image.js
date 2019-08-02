import React, { Component } from 'react';
import s from './Image.scss';

class Image extends Component {
  render() {
    const { src, className, style, alt, ...rest } = this.props;
    return (
      <img
        style={style}
        className={s(className)}
        src={src}
        alt={alt}
        {...rest}
      />
    )
  }
}

export default Image;
