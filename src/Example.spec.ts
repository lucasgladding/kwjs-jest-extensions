import {DateTime} from 'luxon';

describe('Example', () => {
    it('matches an object with a date in the same year', () => {
        const date1 = DateTime.fromISO('2023-06-30');
        const date2 = DateTime.fromISO('2023-03-30');
        const data = {
            date: date1,
        };
        expect(data).toEqual(expect.objectContaining({
            date: expect.dateContainingSameYear(date2),
        }))
    });
});
