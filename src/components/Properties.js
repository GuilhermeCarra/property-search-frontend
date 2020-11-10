import { Link } from 'react-router-dom';

function Properties() {
    return(
    <div className="section">
        <div className="col m4 offset-m1">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://materializecss.com/images/office.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">...</i></span>
                    <p><Link to="property/id">This is a link</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">x</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div>
        <div className="col m4 offset-m2">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://materializecss.com/images/office.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">...</i></span>
                    <p><Link to="property/id">This is a link</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">x</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Properties;