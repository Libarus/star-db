
export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResurce(url) {
        const resp = await fetch(this._apiBase + url);
        if (!resp.ok) {
            throw new Error(`Could not Fetch ${url}.\nReceived status: ${resp.status}`);
        }
        return await resp.json();
    }

    async getAllPeople() {
        const resp = await this.getResurce(`/people/`);
        return resp.results;
    }

    getPerson(id) {
        return this.getResurce(`/people/${id}/`);
    }

    async getAllPlanets() {
        const resp = await this.getResurce(`/planets/`);
        return resp.results.map(this._transformPlanet);
    }

    getPlanet(id) {
        const resp = this.getResurce(`/planets/${id}/`);
        console.log(resp);
        return this._transformPlanet(resp);
    }

    async getAllStarships() {
        const resp = await this.getResurce(`/starships/`);
        return resp.results;
    }

    getStarship(id) {
        return this.getResurce(`/starships/${id}/`);
    }

    _extractId (url) {
        const regExp = /\/([0-9]*)\/$/;
        return url.match(regExp)[1];
    }

    _transformPlanet(planet) {
        console.log(planet);
        return {
            id: 0,//this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

}