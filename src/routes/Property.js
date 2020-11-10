import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header.js';
import Details from '../views/property/Details.js';

function Property() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/property/:id">
          <Details />
        </Route>
      </Switch>
    </>
  );
}

export default Property;
