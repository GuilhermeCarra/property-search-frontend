function Reset() {
    return (
      <div className="orange page-container">
        <div className="container">
          <div className="row">

            <div className="col s12 m10 offset-m1 center z-depth-3 white center-card valign-wrapper">
              <div className="section col s12 m12">
                <h2>Reset Password</h2>
                <div className="col s12">
                  <div className="input-field col s8 offset-s2">
                    <input id="password" type="password"/>
                    <label for="password">Password</label>
                  </div>
                </div>
                <div className="col s12">
                  <div className="input-field col s8 offset-s2">
                    <input id="password_confirm" type="password"/>
                    <label for="password_cofirm">Cofirm Password</label>
                  </div>
                </div>
                <a className="waves-effect waves-light btn-large orange lighten-1">Sign Up</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

export default Reset;