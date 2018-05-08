import { shallow } from 'enzyme';
import React from 'react';
import SearchInput from 'src/components/search_header/search_input/search_input';

describe('<SearchInput />', () => {
    it('should render SearchInput and match snapshot', () => {
        const wrapper = shallow(<SearchInput />);
        expect(wrapper).toMatchSnapshot();
    });
});
