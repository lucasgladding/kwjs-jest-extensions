import {mount} from '@vue/test-utils';
import {DateTime} from 'luxon';
import DateText from './DateText.vue';

describe('DateText', () => {
    it('renders a date', () => {
        const date = DateTime.now();
        const wrapper = mount(DateText, {
            props: {
                date,
            },
        })
        expect(wrapper).toExist();
    });
});
