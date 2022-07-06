import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.gif';

const Header = () => (
  <div className="header">
    <div className="title-container">
      <div className="title-animation-container">
        <span>M</span>
        <span>A</span>
        <span>T</span>
        <span>H</span>
        <span> </span>
        <span>M</span>
        <span>A</span>
        <span>G</span>
        <span>I</span>
        <span>C</span>
        <span>I</span>
        <span>A</span>
        <span>N</span>
        <span>S</span>
      </div>
    </div>
    <img src={logo} alt="this is logo of header" className="header-logo" />
    <ul className="link-container">
      <li>
        <Link className="link-items" to="/"><h3>Home</h3></Link>
      </li>
      <li>
        <Link className="link-items" to="/calculator"><h3>Calculator</h3></Link>
      </li>
      <li>
        <Link className="link-items" to="/quote"><h3>Quote</h3></Link>
      </li>
    </ul>
  </div>
);

export default Header;
