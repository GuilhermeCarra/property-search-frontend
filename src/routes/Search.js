import { Switch, Route } from 'react-router-dom';
import Main from '../views/search/Main.js';
import List from '../views/search/List.js';
import Header from '../components/Header.js';

function Search() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/list">
        <List />
      </Route>
    </Switch>
    </>
  );
}

export default Search;
