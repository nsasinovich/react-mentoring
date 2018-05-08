import { shallow, mount } from 'enzyme';
import React from 'react';
import SearchHeader from 'src/components/search_header/search_header';
import SearchInput from 'src/components/search_header/search_input/search_input';

describe('<SearchHeader />', () => {
    it('should render SearchHeader and match snapshot', () => {
        const wrapper = shallow(<SearchHeader />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain SearchInput element', () => {
        const wrapper = shallow(<SearchHeader />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<SearchInput />)).toBe(true);
    });

    it('should contain search button', () => {
        const wrapper = mount(<SearchHeader />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.search-button')).toHaveLength(1);
    });

    it('should contain two filter buttons', () => {
        const wrapper = mount(<SearchHeader />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.filter-button')).toHaveLength(2);
    });
});
