import React from 'react';
import './content.css';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';

const Content = () => {
    return (
        <div className="row content">

            <div className="col-6">
                <ItemList/>
            </div>

            <div className="col-6">
                <PersonDetails/>
                <PlanetDetails/>
                <StarshipDetails/>
            </div>

        </div>
    );
};

export default Content;