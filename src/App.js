import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/store";
import './App.scss';
import Auth from './routes/Auth.js'
import Search from './routes/Search.js'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
