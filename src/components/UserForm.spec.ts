import {mount} from '@vue/test-utils';
import UserForm from './UserForm.vue';

describe('UserForm', () => {
    it('renders the inputs', () => {
        const wrapper = mount(UserForm, {
            props: {},
        })
        expect(wrapper).toExist();
        expect(wrapper).toHaveInput('username');
        expect(wrapper).toHaveInput('password');
    });
});
