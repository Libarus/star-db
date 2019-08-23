import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: 0,
        name: 'Name planet ... loading ...',
        population: '---',
        rotationPeriod: '---',
        diameter: '---'
    };

    constructor() {
        super();
        this.updatePlanet();
        setInterval(this.updatePlanet, 5000);
    }

    updatePlanet = () => {
        const planetId = Math.floor(Math.random() * 21+2);
        this.swapiService
            .getPlanet(planetId)
            .then((planet) => {
                this.setState(planet);
            });
    };

    render() {

        const { id, name, population, rotationPeriod, diameter } = this.state;

        return (
            <div className="card card-style">
                <div className="card-body">

                    <div className="row">
                        <div className="col-2">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                 className="thumbnail thumbnail-style"/>
                        </div>
                        <div className="col">
                            <h4 className="card-title">{ name }</h4>
                            <p className="card-text">Population: { population }</p>
                            <p className="card-text">Rotation period: { rotationPeriod } standard hours</p>
                            <p className="card-text">Diametr: { diameter } km</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};
