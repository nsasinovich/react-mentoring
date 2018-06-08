import { shallow } from 'enzyme';
import React from 'react';
import App from 'src/app';

describe('<App />', () => {
    it('should render App and match snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
