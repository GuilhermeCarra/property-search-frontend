import { Link } from 'react-router-dom';

function Signup() {
    return (
      <>
        <div className="container login-card">
          <div className="row z-depth-3">

            <div className="col s12 m6 orange center white-text h-100 valign-wrapper">
              <div className="section">
                <h2>Welcome back!</h2>
                <p>To keep connected with us please login with your personal info</p>
                <Link to="/login" className="waves-effect waves-light btn-large orange lighten-1">Sign in</Link>
              </div>
            </div>

            <div className="col s12 m6 center">
              <div className="section">
                <h2>Create Account</h2>
                <p>or use your email for registration</p>
                <div className="col s12">
                  <div className="input-field  col s8 offset-s2">
                    <input id="name" type="text"/>
                    <label for="name">Name</label>
                  </div>
                </div>
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
                <a className="waves-effect waves-light btn-large orange lighten-1">Sign Up</a>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }

export default Signup;