import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import Auth from './routes/Auth.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
