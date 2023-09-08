// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <p className="header">Wave</p>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="home" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="about" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="contact" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
