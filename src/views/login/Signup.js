import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../config/config";
import { registerValidate } from "../../store/actions";

function Signup() {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state);

    const [newUser, setNewUser] = useState({password: null, email: null, name: null});

    function handleRegister() {
        let options = registerRequest(newUser);
        dispatch(registerValidate(options));
    }

    return (
      <>
        <div className="container login-card">
          <div className="row z-depth-3">

            <div className="col s12 m6 orange center white-text h-100 valign-wrapper">
              <div className="section col s12">
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
                  className={`status-msg white-text red z-depth-1 scale-transition ${error || loading || data ? "scale-in" : "scale-out" }`}
                >
                    {loading && <>Validating...</>}
                    {data && <>{data}</>}
                    {error && <>{error.message}</>}
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