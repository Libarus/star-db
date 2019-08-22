import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Content from '../content';

import './app.css';

const App = () => {
    return (
        <div className="container">
            <Header/>
            <RandomPlanet/>
            <Content/>
        </div>
    );
};

export default App;