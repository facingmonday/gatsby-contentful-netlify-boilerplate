import React from 'react';
import s from './MenuButton.scss';

class MenuButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  handleClick(){
  this.setState({open:!this.state.open});
  }
  
  render(){
    const styles = {
           
    }
    return(
      <div className={s.menuButton} 
        onClick={this.props.onClick ? this.props.onClick: 
          ()=> {this.handleClick();}}>
        <div className={s(s.menuButton__line, (this.state.open) ? s.menuButton__lineTopOpen : s.menuButton__lineTop )}/>
        <div className={s(s.menuButton__line, (this.state.open) ? s.menuButton__lineMiddleOpen : s.menuButton__lineMiddle )}/>
        <div className={s(s.menuButton__line, (this.state.open) ? s.menuButton__lineBottomOpen : s.menuButton__lineBottom )}/>
      </div>
    )
  }
}

export default MenuButton;