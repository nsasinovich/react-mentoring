import { shallow, mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { INITIAL_STATE } from 'src/constants/app_constants';
import SearchHeader from 'src/components/search_header/search_header';
import SearchInput from 'src/components/search_header/search_input/search_input';

const mockStore = configureStore();

let store;
let wrapper;
store = mockStore(INITIAL_STATE);


describe('<SearchHeader />', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
        wrapper = mount(<SearchHeader store={store}/>).dive();
    });

    it('should render SearchHeader and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain SearchInput element', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(SearchInput)).toHaveLength(1);
    });

    it('should contain search button', () => {
        wrapper = mount(<SearchHeader />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.search-button')).toHaveLength(1);
    });

    it('should contain two filter buttons', () => {
        wrapper = mount(<SearchHeader />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.filter-button')).toHaveLength(2);
    });
});
