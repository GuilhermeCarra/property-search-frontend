import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Filters from '../../components/Filters.js';
import Properties from '../../components/Properties.js';
import { queryParser } from '../../config/utils';

function List() {;
  const location = useLocation().search;
  const [params, setParams] = useState(queryParser(location));
  const { loading, error, data } = useSelector((state) => state);

  useEffect(() => setParams(queryParser(location)),[location]);

  return (
    <>
      <div className="row">
        <Filters search={params} />
      </div>
      <div className="row">
        <Properties />
      </div>
    </>
  );
}

export default List;