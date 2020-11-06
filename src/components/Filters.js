function Filters() {
    return(
    <div className="section">
        <div class="col s12">
            <div class="row">
                <div class="input-field col s8 m3">
                    <input placeholder="Local" id="local" type="text" class="validate"/>
                    <label for="local"></label>
                </div>
                <div class="col s2">
                    <p>
                        <label>
                            <input name="group1" type="radio" checked />
                            <span>Houses</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>Offices</span>
                        </label>
                    </p>
                </div>
                <div class="input-field col s3">
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div class="input-field col s3">
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Filters;