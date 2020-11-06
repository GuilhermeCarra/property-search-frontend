import { Switch, Route } from 'react-router-dom';
import Main from '../views/search/Main.js';

function Search() {
  return (
    <Switch>
      <Route exact path="/search">
        <Main />
      </Route>
    </Switch>
  );
}

export default Search;
