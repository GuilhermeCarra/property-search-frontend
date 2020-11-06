import { Switch, Route } from 'react-router-dom';
import Main from '../views/search/Main.js';
import Header from '../components/Header.js';

function Search() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
    </>
  );
}

export default Search;
