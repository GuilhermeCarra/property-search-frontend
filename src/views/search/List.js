import Filters from '../../components/Filters.js';
import Properties from '../../components/Properties.js';

function List() {
  return (
    <>
      <div className="row">
        <Filters />
      </div>
      <div className="row">
        <Properties />
      </div>
    </>
  );
}

export default List;