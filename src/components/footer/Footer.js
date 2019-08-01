import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

import s from './Footer.scss';
import GoogleMap from '../google-map';

class Footer extends Component {

  state = {}

  static propTypes = {
    leftHeading: PropTypes.string,
    leftText: PropTypes.string,
    rightHeading: PropTypes.string,
    rightText: PropTypes.string,
    links: PropTypes.array,
    subLinks: PropTypes.array,
    socialLinks: PropTypes.array
  }

  static defaultProps = {
    leftHeading: '',
    leftText: '',
    rightHeading: '',
    rightText: '',
    links: [],
    subLinks: [],
    socialLinks: []
  }

  render() {
    const date = new Date();
    return (
      <div className={s.footer}>
        <div className={s.footer__column}>
          <a className={s.footer__link} href={'shirts'}>
            T-Shirts
          </a>
          <a className={s.footer__link} href={'photo'}>
            Photography
          </a>
          <a className={s.footer__link} href={'video'}>
            Video
          </a>
          <a className={s.footer__link} href={'web'}>
            Web
          </a>
          <a className={s.footer__link} href={'apps'}>
            Apps
          </a>
        </div>
        <div className={s.footer__column}>
          <a className={s.footer__link} href={'shirts'}>
            Shop
          </a>
          <a className={s.footer__link} href={'photo'}>
            About Us
          </a>
          <a className={s.footer__link} href={'video'}>
            FAQ
          </a>
          <a className={s.footer__link} href={'web'}>
            Contact
          </a>
        </div>
        <div className={s.footer__column}>
          <div className={s.footer__address}>
              <p>234 2nd St</p>
              <p>Barberton, OH 44203</p>
            </div>
        </div>
        <div className={s.footer__column}>
          <GoogleMap
            width={'250'}
            height={'250'}
            source={'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJu_Ow6YHTMIgRAbFqlGJn2mQ&key=AIzaSyA9TALVNowW_loCDV5GsjwcmkS3fLb4kSc'}
            allowFullScreen={false}
          />
        </div>
      </div>
    )
  }
}

export default Footer;
