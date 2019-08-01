import React, { Component } from 'react';
import s from './HorizontalScroller.scss';

class HorizontalScroller extends Component {
  render() {
    return (
      <div className={s.horizontalScroller__container}>
        {
          Children.map(children, (child, i) => (
            <div className={s.horizontalScroller__child}>
              {
                cloneElement(child)
              }
            </div>
          ))
        }
      </div>
    )
  }
}

export default HorizontalScroller;
