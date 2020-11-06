import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Auth from './routes/Auth.js'
import Search from './routes/Search.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
