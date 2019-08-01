import React, { Component } from 'react';

class HeroVideo extends Component {
  render() {
    return (
      <div>
        <iframe src="https://player.vimeo.com/video/76979871?background=1" width="100%" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    );
  }
}

export default HeroVideo;