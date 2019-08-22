import React from 'react';
import './planet-details.css';

const PlanetDetails = () => {
    return (
        <div className="card card-style">
            <div className="card-body">

                <div className="row">
                    <div className="col-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/4.jpg`} className="thumbnail planet-thumbnail-style" />
                    </div>
                    <div className="col-5">
                        <h4 className="card-title">Planet name</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlanetDetails;