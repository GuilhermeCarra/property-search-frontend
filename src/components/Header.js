import { Link } from 'react-router-dom';

function Header() {
    return(
    <nav>
      <div className="nav-wrapper grey lighten-3 z-depth-1">
        <Link to="/" className="brand-logo orange-text left">Logo</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/login/signup">Sign up</Link></li>
          <li><Link to="/search">List</Link></li>
        </ul>
      </div>
    </nav>
    );
}

export default Header;