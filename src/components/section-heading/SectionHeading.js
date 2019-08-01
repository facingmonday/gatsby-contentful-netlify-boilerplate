import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import s from './SectionHeading.scss';

class SectionHeading extends Component {
  constructor(props) {
    super(props);
    
  }
  static defaultProps = {
    title: '',
    subtitle: '',
    cta: {},
  }
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cta: PropTypes.object,
  }

  render() {
    const { title, subtitle, cta } = this.props;
    return (
      <section className={s.sectionHeading__container}>
        <div className={s.sectionHeading__title_container}>                
          <h2 className={s.sectionHeading__title}>{title}</h2>
          <h4 className={s.sectionHeading__subtitle}>{subtitle}</h4>
        </div>
        {
            (Object.keys(cta).length)
            ? <div className={s.sectionHeading__cta_container}>
              <Button href={cta.href} label={cta.label} />
            </div>
            : null
          }
      </section>
    );
  }
}

export default SectionHeading;