
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
        return resp.results;
    }

    getPlanet(id) {
        return this.getResurce(`/planets/${id}/`);
    }

    async getAllStarships() {
        const resp = await this.getResurce(`/starships/`);
        return resp.results;
    }

    getStarship(id) {
        return this.getResurce(`/starships/${id}/`);
    }

}