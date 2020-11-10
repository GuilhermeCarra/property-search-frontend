import { useHistory } from "react-router-dom";

function Main() {
  let history = useHistory();

  function handleSubmit(e) {
    if(e.key === 'Enter'){
      history.push(`/search?location=${e.target.value}`)
    }
  }

  return (
    <div className="orange lighten-2 searchpage-container">
      <div className="row">

        <div className="col s12 center white-text h-100 bg-text">
          <div className="section">
            <h4>Let's find a home that is perfect for you.</h4>
            <div className="row">
              <div className="input-field col s12">
                <input id="local" type="text" className="validate" onKeyPress={(e) => handleSubmit(e)}/>
                <label htmlFor="local">Where do you want to live?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;