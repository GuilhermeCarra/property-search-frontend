import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import Auth from './routes/Auth.js'

function App() {
  return (
    <Router>
      <h1>Hey welcome home!</h1>
      <div className="links">
        <Link to='/login/' className="link">Login</Link>
        <Link to='/login/signup' className="link">Sign Up</Link>
      </div>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
