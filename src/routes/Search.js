import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from '../views/search/List.js';
import Header from '../components/Header.js';

function Search() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/search">
          <List />
        </Route>
      </Switch>
    </>
  );
}

export default Search;
