import React from 'react';
import PropTypes from 'prop-types';

import s from './Icon.scss';

const iconList = [
  'badge',
  'battery-protection',
  'biometric',
  'bug-bounty',
  'card',
  'cards',
  'cloud-management',
  'customization',
  'document-security',
  'document',
  'ease-of-use',
  'easy-to-install',
  'existing-infrastructure',
  'flag',
  'front-desk',
  'futureproof',
  'globe',
  'hand',
  'handsfree',
  'hospitality',
  'infinity',
  'landlord-tenant',
  'link',
  'lock',
  'no-batteries',
  'offices',
  'onboarding',
  'optimization',
  'over-the-air',
  'personalization',
  'pricing',
  'responsive-workplace',
  'security',
  'smart-reader-plus',
  'smartphone',
  'smartwatch',
  'ultimate-workplace',
  'unlock',
  'upgrade-readers',
  'upgrade-system',
  'visitor-access',
  'zone-share',
  // other icons:
  'arrow-down',
  'arrow-right',
  'arrow-rounded',
  'arrow-rounded-large',
  'cart',
  'check',
  'chevron',
  'chevron-rounded',
  'chevron-rounded-large',
  'close',
  'download',
  'envelope',
  'handle',
  'no',
  'no-small',
  'play',
  'question',
  'yes',
  // social medias:
  'social-facebook',
  'social-instagram',
  'social-twitter',
  'social-youtube',
  'social-linkedin',
  'mobile-app',
  'network',
  'photo-camera',
  'tshirt',
  'video-camera',
  'website',
];

const components = {};

iconList.forEach((icon) => {
  // eslint-disable-next-line import/no-dynamic-require
  try {
    const component = require(`../../assets/svg/icons/${icon}.svg`);
    components[icon] = component;
  } catch(e){
    console.log('e', e);

  }
  
  

});

const Icon = ({ id, className = '' }) => {
  console.log('components', components);
  if (typeof id !== 'string' || iconList.indexOf(id) === -1) {
    return null;
  }

  const RenderedIcon = components[id];
  return <RenderedIcon className={s('icon', className)} />;

};

export default Icon;

Icon.propTypes = {
  id: PropTypes.oneOf(Object.keys(components)).isRequired,
  className: PropTypes.string,
};
