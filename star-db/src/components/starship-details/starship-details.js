import React from 'react';
import './starship-details.css';

const StarshipDetails = () => {
    return (
        <div className="card card-style">
            <div className="card-body">

                <div className="row">
                    <div className="col-4">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/15.jpg`} className="thumbnail starship-thumbnail-style" />
                    </div>
                    <div className="col-5">
                        <h4 className="card-title">Starship name</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StarshipDetails;