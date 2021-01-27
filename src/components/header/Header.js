import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
import MobileMenu from '../../assets/mobile-menu.svg';
import close from '../../assets/close.svg';

class Header extends React.Component{

  constructor(){
    super();

    this.state = {
      mobileMenu: false
    }
  }

  render(){

    const {mobileMenu} = this.state;

    return(
      <>
        <div className="dekstop-header-container">
          <Link to='/' className="option">HOME</Link>
          <Link to='/characters' className="option">CHARACTERS</Link>
          <Link to='/vehicles' className="option">VEHICLES</Link>
        </div>
        <div className="mobile-navbar-header">
          <img 
            src={MobileMenu} 
            alt="menu"
            className='sidebar-toggle'
            onClick={()=> this.setState({mobileMenu: true})}  />
        </div>
        <div className={`${mobileMenu ? 'show' : 'hide'} mobile-header-container`}>      
          <img 
            src={close} 
            alt="close" 
            className="close-btn" 
            onClick={()=> this.setState({mobileMenu: false})}
          />
          <Link 
            to='/' 
            className="mobile-option" 
            onClick={()=> this.setState({mobileMenu: false})}>
              HOME
          </Link>
          <Link 
            to='/characters' 
            className="mobile-option" 
            onClick={()=> this.setState({mobileMenu: false})}>
              CHARACTERS
          </Link>
          <Link 
            to='/vehicles' 
            className="mobile-option" 
            onClick={()=> this.setState({mobileMenu: false})}>
              VEHICLES
          </Link>
        </div>
      </>
  )}
}

export default Header;