import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buildURLQuery} from '../config/utils';

function Filters({search}) {
    const [queryString, setQueryString] = useState(null);
    const [propertyType, setPropertyType] = useState('Houses');
    const [extraFilters, setExtraFilters] = useState(false);
    const [formData, setFormData] = useState({location: search.location});
    const [houseForm, setHouseForm] = useState({});
    const [officeForm, setOfficeForm] = useState({});

    useEffect(() => {
        let string;
        if(propertyType === 'Houses') {
            string = buildURLQuery({...houseForm, ...formData, type_id: 1});
        } else {
            string = buildURLQuery({...officeForm, ...formData, type_id: 2});
        }
        setQueryString(string);
    },[formData,officeForm,houseForm,propertyType]);

    return(
    <div className="section">
        <div className="col s12">
            <div className="row">
                <div className="input-field col s8 m4">
                    <input placeholder="Location" id="local" defaultValue={formData.location} type="text" className="validate" onChange={(e) => setFormData({...formData, location: e.target.value})}/>
                    <label htmlFor="local"></label>
                    <div className="container section">
                        <div className="row">
                            <button className="waves-effect waves-light btn-small" onClick={() => setExtraFilters(!extraFilters)}>More filters +</button>
                        </div>
                    </div>
                </div>
                <div className="col s2">
                    <p>
                        <label onClick={() => setPropertyType('Houses')}>
                            <input name="prop_type" type="radio" defaultChecked={propertyType === "Houses"} />
                            <span>Houses</span>
                        </label>
                    </p>
                    <p>
                        <label onClick={() => setPropertyType('Offices')}>
                            <input name="prop_type" type="radio" defaultChecked={propertyType === "Offices"} />
                            <span>Offices</span>
                        </label>
                    </p>
                </div>
                {propertyType === 'Houses' ? (
                    <>
                        <div className="input-field col s6 m3">
                            <select className="browser-default" name="house" onChange={(e) => setHouseForm({...houseForm, format: e.target.value})}>
                                <option value="" defaultValue>Choose a type</option>
                                <option value="apartment">Flat / Apartment</option>
                                <option value="house">House</option>
                                <option value="duplex">Duplex</option>
                                <option value="penthouse">Penthouse</option>
                            </select>
                        </div>
                        <div className="input-field col s6 m3">
                            <select className="browser-default" name="bedrooms" onChange={(e) => setHouseForm({...houseForm, bedrooms: e.target.value})}>
                                <option value="" defaultValue>Bedrooms</option>
                                <option value="0">0 (studio flat)</option>
                                <option value="1">1 Bedroom</option>
                                <option value="2">2 Bedrooms</option>
                                <option value="3">3 Bedrooms</option>
                                <option value="4">4+ Bedrooms</option>
                            </select>
                        </div>
                        <div className="input-field col s6 m3">
                            <select className="browser-default" name="equipment" onChange={(e) => setHouseForm({...houseForm, equipment: e.target.value})}>
                                <option value="" defaultValue>Equipment</option>
                                <option value="indifferent">Indifferent</option>
                                <option value="kitchen">Fully fitted kitchen</option>
                                <option value="furnished">Furnished</option>
                            </select>
                        </div>
                        <div className="input-field col s6 m3">
                            <select className="browser-default" name="condition" onChange={(e) => setHouseForm({...houseForm, condition: e.target.value})}>
                                <option value="" defaultValue>Condition</option>
                                <option value="new">New homes</option>
                                <option value="good">Good condition</option>
                                <option value="old">Need renovation</option>
                            </select>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="input-field col s12 m6">
                            <select className="browser-default" name="office" onChange={(e) => setOfficeForm({...officeForm, use: e.target.value})}>
                                <option value="" defaultValue>Building use</option>
                                <option value="private">Private</option>
                                <option value="co">Co-working</option>
                                <option value="security">Security system</option>
                            </select>
                        </div>
                    </>
                )}
                <div className="col s12 center-align">
                    <div className="input-field col s6 m4 offset-m2">
                        <input id="min_price" type="number" className="validate" name="min_price" onChange={(e) => setFormData({...formData, min_price: e.target.value})}/>
                        <label htmlFor="min_price">Min Price</label>
                    </div>
                    <div className="input-field col s6 m4">
                        <input id="last_name" type="number" className="validate" onChange={(e) => setFormData({...formData, max_price: e.target.value})}/>
                        <label htmlFor="last_name">Max Price</label>
                    </div>
                </div>
            </div>
            {extraFilters &&
            <div className="container">
                <div className="row">
                    <div className="input-field col s12 m3">
                            <select className="browser-default" name="date" onChange={(e) => setFormData({...formData, date: e.target.value})}>
                                <option value="" disabled selected>Publication date</option>
                                <option value="hours">Last 48 hours</option>
                                <option value="week">Last week</option>
                                <option value="month">Last month</option>
                            </select>
                    </div>
                    <p className="col s6 m3">
                        <label>
                            <input type="checkbox" onChange={(e) => setFormData({...formData, pets: e.target.checked})} />
                            <span>Pets Allowed</span>
                        </label>
                    </p>
                    <p className="col s6 m3">
                        <label>
                            <input type="checkbox" onChange={(e) => setFormData({...formData, lift: e.target.checked})} />
                            <span>Lift</span>
                        </label>
                    </p>
                    <p className="col s6 m3">
                        <label>
                            <input type="checkbox" onChange={(e) => setFormData({...formData, air: e.target.checked})} />
                            <span>Air conditioning</span>
                        </label>
                    </p>
                    <p className="col s6 m3">
                        <label>
                            <input type="checkbox" onChange={(e) => setFormData({...formData, garden: e.target.checked})} />
                            <span>Garden</span>
                        </label>
                    </p>
                    <p className="col s6 m3">
                        <label>
                            <input type="checkbox" onChange={(e) => setFormData({...formData, pool: e.target.checked})} />
                            <span>Swimming pool</span>
                        </label>
                    </p>
                    <p className="col s6 m3">
                        <label>
                            <input type="checkbox" onChange={(e) => setFormData({...formData, terrace: e.target.checked})} />
                            <span>Terrace</span>
                        </label>
                    </p>
                </div>
            </div>
            }
            <div className="center-align">
                <Link to={"/search?"+queryString} className="waves-effect waves-light btn-small">Search</Link>
            </div>
        </div>
    </div>
    );
}

export default Filters;