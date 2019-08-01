import React, { Component } from 'react';
import s from './Section.scss';

class Section extends Component {
  render() {
    const classes = [
      s.section,
      this.props.flexDirection && s.column
    ]
    return (
      <div className={s(classes)}>
        { this.props.children }
      </div>
    );
  }
}

export default Section;