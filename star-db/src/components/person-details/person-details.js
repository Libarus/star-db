import React from 'react';
import './person-details.css';

const PersonDetails = () => {
    return (
        <div className="card card-style">
            <div className="card-body">

                <div className="row">
                    <div className="col-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/3.jpg`} className="thumbnail person-thumbnail-style" />
                    </div>
                    <div className="col-5">
                        <h4 className="card-title">Person name</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PersonDetails;