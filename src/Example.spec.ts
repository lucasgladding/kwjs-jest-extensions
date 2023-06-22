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

    it('matches an object with a date after 2023', () => {
        const date = DateTime.fromISO('2023-01-01');
        const data = {
            date,
        };
        expect(data).toEqual(expect.objectContaining({
            date: expect.dateAfterYear(2023),
        }))
    });
});
