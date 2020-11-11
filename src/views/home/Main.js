import { useHistory } from "react-router-dom";
import LocationInput from "../../components/LocationInput"

function Main() {
  return (
    <div className="orange lighten-2 searchpage-container">
      <div className="row">

        <div className="col s12 center grey-text text-darken-4 z-depth-3">
          <div className="section">
          <div className="container">
            <h4 className="bg-text">Let's find a home that is perfect for you.</h4>
            <div className="row">
              <div className="input-field col s12">
                <LocationInput/>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;