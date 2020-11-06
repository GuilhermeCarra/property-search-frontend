import { Link } from 'react-router-dom';

function Header() {
    return(
    <nav>
      <div class="nav-wrapper grey lighten-3 z-depth-1">
        <a href="#" class="brand-logo orange-text left">Logo</a>
        <ul id="nav-mobile" class="right">
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/login/signup">Sign up</Link></li>
        </ul>
      </div>
    </nav>
    );
}

export default Header;