import { Link } from 'react-router-dom';
import { formatter } from '../config/utils';

function Properties({properties}) {
    return(
    <div className="container">

        {properties.map((item) => (
            <div className="col m6">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={item.images[0].img_src}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{item.city} - {formatter.format(item.price)} <i className="material-icons right">...</i></span>
                        <p><Link to={'property/'+item.id}>View details</Link></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><strong>{item.title}</strong><i className="material-icons right">x</i></span>
                        <p>{item.description}</p>
                        {item.format_id === 1 && <p>Apartment</p>}
                        {item.format_id === 2 && <p>House</p>}
                        {item.format_id === 3 && <p>Duplex</p>}
                        {item.format_id === 4 && <p>Penthouse</p>}
                        <p>Bedrooms: {item.bedrooms}</p>
                        <p>Bathrooms: {item.bathrooms}</p>
                    </div>
                </div>
            </div>
        ))

        }

    </div>
    );
}

export default Properties;