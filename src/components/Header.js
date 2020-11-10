import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from '../store/actions';

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  return(
  <nav>
    <div className="nav-wrapper grey lighten-3 z-depth-1">
      <Link to="/" className="brand-logo orange-text left">Logo</Link>
      <ul id="nav-mobile" className="right">
        {user ? (
          <>
            <li><a onClick={() => dispatch(logout)}>Logout</a></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Sign in</Link></li>
            <li><Link to="/login/signup">Sign up</Link></li>
          </>
        )}
      </ul>
    </div>
  </nav>
  );
}

export default Header;