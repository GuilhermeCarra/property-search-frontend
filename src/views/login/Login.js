import { Link, Redirect  } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginValidate } from '../../store/actions';
import { loginRequest } from '../../config/config';

function Login() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state);

  const [credentials, setCredentials] = useState({password: null, email: null});

  function handleLogin() {
      let options = loginRequest(credentials);
      dispatch(loginValidate(options));
  }

  return (
    <>
      <div className="container login-card">
        <div className="row z-depth-3">

          <div className="col s12 m6 center">
            <div className="section">
              <h2>Sign in</h2>
              <p>or use your account</p>
              <div className="col s12">
                <div className="input-field  col s8 offset-s2">
                  <input id="email" type="text" onChange={(e)=>setCredentials({...credentials, email: e.target.value})}/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col s12">
                <div className="input-field col s8 offset-s2">
                  <input id="password" type="password" onChange={(e)=>setCredentials({...credentials, password: e.target.value})}/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <span
                className={`status-msg white-text red z-depth-1 scale-transition ${error || loading ? "scale-in" : "scale-out" }`}
              >
                  {loading && <>Validating credentials...</>}
                  {error && <>{error.message}</>}
              </span>
              <p><Link to="/login/reset">Forgot your password?</Link></p>
              <button className="waves-effect waves-light btn-large orange lighten-1" onClick={handleLogin}>
                Sign in
              </button>
            </div>
          </div>

          <div className="col s12 m6 orange center white-text h-100 valign-wrapper">
            <div className="section col s12">
              <h2>Hello, friend!</h2>
              <p>Enter your personal details and start a journey with us</p>
              <Link to="/login/signup" className="waves-effect waves-light btn-large orange lighten-1">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
      {user && <Redirect to='/' />}
    </>
  );
}

export default Login;