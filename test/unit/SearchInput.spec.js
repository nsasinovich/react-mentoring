import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { INITIAL_STATE } from 'src/constants/app_constants';
import SearchInput from 'src/components/search_header/search_input/search_input';

describe('<SearchInput />', () => {
    it('should render SearchInput and match snapshot', () => {
        const mockStore = configureStore();
        const store = mockStore(INITIAL_STATE);

        const wrapper = shallow(<SearchInput store={store}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
