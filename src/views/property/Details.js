import { useEffect } from 'react';
import { useParams, Link  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { propertyById } from '../../config/config';
import { fetchInit, clearStatus } from '../../store/actions';
import { formatter } from '../../config/utils';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Loading from '../../components/Loading.js';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, status, data } = useSelector((state) => state);

    useEffect(() => {
        let options = propertyById(id);
        dispatch(fetchInit(options, 'details'));

        return () => {
            dispatch(clearStatus());
        }
    },[]);

    return(
        <>
        {!loading && status === "details" ? (
            <>
                <div className="">
                    <p className="back-container"><Link to={'/search?location='+data.city}>⯇ Back to search results</Link></p>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col s12 m6 lighten-3">
                            <img className="col s12" src={data.images[0].img_src}/>
                            <div className="col s12 center">Photos</div>
                        </div>
                        <div className="col s12 m6">
                            <h5><strong>{data.title}</strong></h5>
                            <p>{data.city}</p>
                            <h5>{formatter.format(data.price)}</h5>
                            {data.format_id === 1 && <p>Apartment</p>}
                            {data.format_id === 2 && <p>House</p>}
                            {data.format_id === 3 && <p>Duplex</p>}
                            {data.format_id === 4 && <p>Penthouse</p>}
                            <p>Bedrooms: {data.bedrooms}</p>
                            <p>Bathrooms: {data.bathrooms}</p>
                            <div className="row">
                                <p className="col s3">Lift {data.lift ? '✓' : '✘'}</p>
                                <p className="col s3">Pets {data.pets ? '✓' : '✘'}</p>
                                <p className="col s3">Pool {data.pool ? '✓' : '✘'}</p>
                                <p className="col s3">Terrace {data.terrace ? '✓' : '✘'}</p>
                                <p className="col s3">Garden {data.garden ? '✓' : '✘'}</p>
                                <p className="col s3">AC {data.ac ? '✓' : '✘'}</p>
                            </div>
                            <button className="col s9 m9 waves-effect waves-light btn-large orange lighten-1">Contact</button>
                            <button className="col s2 m2 offset-s1 waves-effect waves-light btn-large orange lighten-1 red">❤</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Map center={[data.lat, data.long]} zoom={100} scrollWheelZoom={false}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[data.lat, data.long]} />
                            </Map>
                        </div>
                    </div>
                </div>
            </>
        ): (
            <Loading />
        )}
    </>
    );
}

export default Details;