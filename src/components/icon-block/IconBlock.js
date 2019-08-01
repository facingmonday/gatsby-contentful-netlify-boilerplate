import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import s from './IconBlock.scss';

class IconBlock extends Component {
  state = {}

  static propTypes = {
    iconName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    description: '',
  }

  render() {
    const { iconName, title, description } = this.props;
    return (
      <div className={s.iconBlock}>
        <div className={s.iconBlock__icon}>
          { iconName && <Icon id={iconName} className={s.iconBlock__icon} />}
        </div>                        
        <h3 className={s.iconBlock__title}>{title}</h3>
        <p className={s.iconBlock__description}>{description}</p>                
      </div>
    );
  }
}

export default IconBlock;
