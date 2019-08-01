import React from 'react';
import s from './MenuItem.scss';

class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover:false,
    }
  }
  
  handleHover(){
    this.setState({hover:!this.state.hover});
  }
  
  render(){
    return(
      <div className={s.menuItem__container}>
        <div 
          className={s.menuItem__menuItem} 
          onMouseEnter={()=>{this.handleHover();}} 
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
        >
          {this.props.children}  
        </div>
      <div className={s.menuItem__line}/>
    </div>  
    )
  }
}

MenuItem.defaultProps = {
  delay: 0,
}
export default MenuItem;
