  import React, { Component } from 'react';
  
  class Testimonial extends Component {
    render() {
      return (
        <div class={s.testimonial__container}>
          <div class={s.testimonial__quote_container}>
              <i class={s.testimonial__quote_left}></i> 
              <blockquote class={s.testimonial__quote}>{this.props.quote}</blockquote>                            
          </div>
          <div class={s.testimonial__meta}>
            <div class={s.testimonial__profile}>
              <Avatar />
              <p class={s.testimonial__name}>{this.props.name}</p>
              <p class={s.testimonial__title}>{this.props.title}</p>
            </div>
            <div class={s.testimonial__logo}>
              <Image src={this.props.logo} alt={this.props.logo.alt} />
            </div>
          </div>
        </div>  
      );
    }
  }
  
  export default Testimonial;