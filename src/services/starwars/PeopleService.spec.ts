import axios from 'axios';
import {PeopleService} from './PeopleService.ts';

vi.mock('axios');

describe('PeopleService', () => {
    it('can search for a person by name', () => {
        const name = 'Han Solo';
        const client = axios;
        const service = new PeopleService(client);
        service.search(name);
        expect(client).toReceiveRequest('/api/people', {
            params: {
                search: name,
            },
        });
    });
});