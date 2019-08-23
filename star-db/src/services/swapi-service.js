
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
        return resp.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const resp = await this.getResurce(`/people/${id}/`);
        return this._transformPerson(resp);
    }

    async getAllPlanets() {
        const resp = await this.getResurce(`/planets/`);
        return resp.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const resp = await this.getResurce(`/planets/${id}/`);
        return this._transformPlanet(resp);
    }

    async getAllStarships() {
        const resp = await this.getResurce(`/starships/`);
        return resp.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const resp = await this.getResurce(`/starships/${id}/`);
        return this._transformStarship(resp);
    }

    _extractId (url) {
        const regExp = /\/([0-9]*)\/$/;
        return url.match(regExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            hairColor: person.hair_color
        };
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.gender,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    }
}