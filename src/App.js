import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/store";
import './App.scss';
import Auth from './routes/Auth.js'
import Search from './routes/Search.js'
import Property from './routes/Property.js'
import Home from './views/home/Main.js';
import Header from './components/Header.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/property">
            <Property />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
