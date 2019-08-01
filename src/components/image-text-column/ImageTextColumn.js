import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageTextColumn.scss';
import Image from '../image';
import { navigate } from "gatsby";
import Button from '../button'
class ImageTextColumn extends Component {
  static propTypes = {
    heading: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.any,
  }
  render() {
    const { image, body, heading, cta, right } = this.props;
    const classes = [
      s.imageTextColumn,
      right && s.imageTextColumn__right
    ];

    return (
      <div className={s(classes)}>
        <div className={s.imageTextColumn__imageContainer}>
          <Image style={{ flex: 1, width: '100%' }} src={image} />
        </div>
        <div className={s.imageTextColumn__textContainer}>
          <h2>{heading}</h2>
          <p>{body}</p>
          {
            cta && 
            <div>
              <Button onClick={() => navigate(cta.href)} label={cta.label} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ImageTextColumn;
