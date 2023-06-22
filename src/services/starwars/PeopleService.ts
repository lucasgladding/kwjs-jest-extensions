import {Axios} from 'axios';

export class PeopleService {
    client: Axios;

    constructor(client: Axios) {
        this.client = client;
    }

    search(name: string) {
        this.client.get('/api/people', {
            params: {
                search: name,
            },
        });
    }
}