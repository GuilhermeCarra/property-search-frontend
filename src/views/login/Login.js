import { Link } from 'react-router-dom';

function Login() {
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
                    <input id="email" type="text"/>
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="col s12">
                  <div className="input-field col s8 offset-s2">
                    <input id="password" type="password"/>
                    <label for="password">Password</label>
                  </div>
                </div>
                <p><Link to="/login/reset">Forgot your password?</Link></p>
                <a className="waves-effect waves-light btn-large orange lighten-1">Sign in</a>
              </div>
            </div>

            <div className="col s12 m6 orange center white-text h-100 valign-wrapper">
              <div className="section">
                <h2>Hello, friend!</h2>
                <p>Enter your personal details and start a journey with us</p>
                <Link to="/login/signup" className="waves-effect waves-light btn-large orange lighten-1">Sign up</Link>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }

export default Login;