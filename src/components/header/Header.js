import './header.styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="header-container">
      <Link to='/' className="option">HOME</Link>
      <Link to='/characters' className="option">CHARACTERS</Link>
      <Link to='/vehicles' className="option">VEHICLES</Link>
    </div>
  )
}

export default Header;