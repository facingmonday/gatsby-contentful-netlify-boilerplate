import React, { Component } from 'react';
import s from './NavigationLink.scss';

export default ({href, label}) => (
  <div className={s.navLink}>
    <a href={href}>
      {label}
    </a>
  </div>
);
