import React from 'react';
import './random-planet.css';

const RandomPlanet = () => {
    return (
        <div className="card card-style">
            <div className="card-body">

                <div className="row">
                    <div className="col-2">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/2.jpg`} className="thumbnail thumbnail-style" />
                    </div>
                    <div className="col">
                        <h4 className="card-title">Name planet</h4>
                        <p className="card-text">Population: ####</p>
                        <p className="card-text">Rotation period: ####</p>
                        <p className="card-text">Diametr: ####</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomPlanet;