import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { queryParser } from '../../config/utils';
import { searchRequest } from '../../config/config'
import { fetchInit, clearStatus } from '../../store/actions'
import Filters from '../../components/Filters.js';
import Properties from '../../components/Properties.js';
import Loading from '../../components/Loading.js';


function List() {;
  const dispatch = useDispatch();
  const location = useLocation().search;

  const [params, setParams] = useState(queryParser(location));

  const { loading, error, data } = useSelector((state) => state);

  useEffect(() => setParams(queryParser(location)),[location]);

  useEffect(() => {
    let options = searchRequest(location);
    dispatch(fetchInit(options, 'search'));

    return () => {
      dispatch(clearStatus());
    }
  },[location]);

  return (
    <>
      <div className="row">
        <Filters search={params} />
      </div>
      <div className="row">
        {loading && status === "search" ? (
          <Loading />
          ) : (
          data.length > 0 ? (
            <Properties properties={data} />
          ) : (
            <div className="section">
              <h5 className="center">No properties found :(</h5>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default List;