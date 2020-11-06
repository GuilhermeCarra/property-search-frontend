import { Switch, Route } from 'react-router-dom';
import Login from '../views/login/Login.js';
import Signup from '../views/login/Signup.js';
import Reset from '../views/login/Reset.js';

function Auth() {
  return (
    <Switch>
      <Route exact path="/login/">
          <Login />
      </Route>
      <Route path="/login/signup">
        <Signup />
      </Route>
      <Route path="/login/reset">
        <Reset />
      </Route>
    </Switch>
  );
}

export default Auth;
