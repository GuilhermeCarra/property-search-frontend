import { Switch, Route } from 'react-router-dom';
import List from '../views/search/List.js';
import Header from '../components/Header.js';

function Search() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/search">
          <List />
        </Route>
      </Switch>
    </>
  );
}

export default Search;
