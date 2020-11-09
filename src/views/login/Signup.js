import { Link } from 'react-router-dom';
import { useState } from 'react';
import { validateEmail } from "../../config/utils";

function Signup() {
    const [newUser, setNewUser] = useState({password: null, email: null, name: null});
    const [validationMsg, setValidationMsg] = useState(null);

    function handleRegister() {
      const {email, password, name} = newUser;
      if (password === null || email === null || name === null) {
        setValidationMsg('Please, fill all fields');
      } else if (password === "" || email === "" || name === "") {
        setValidationMsg('Please, fill all fields');
      } else if(!validateEmail(email)) {
        setValidationMsg('Invalid email');
      } else if (password.length < 6) {
        setValidationMsg('Password must have at least 6 digits');
      } else {
        setValidationMsg(null);
      }
    }

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
                    <input id="name" type="text" onChange={(e)=>setNewUser({...newUser, name: e.target.value})} />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className="col s12">
                  <div className="input-field  col s8 offset-s2">
                    <input id="email" type="text" onChange={(e)=>setNewUser({...newUser, email: e.target.value})} />
                    <label htmnlFor="email">Email</label>
                  </div>
                </div>
                <div className="col s12">
                  <div className="input-field col s8 offset-s2">
                    <input id="password" type="password" onChange={(e)=>setNewUser({...newUser, password: e.target.value})} />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <span
                  className={`status-msg white-text red z-depth-1 scale-transition ${validationMsg ? "scale-in" : "scale-out" }`}
                >
                    {validationMsg}
                </span>
                <p></p>
                <button className="waves-effect waves-light btn-large orange lighten-1" onClick={handleRegister}>Sign Up</button>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }

export default Signup;