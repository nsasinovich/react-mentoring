import { shallow } from 'enzyme';
import React from 'react';
import Logo from 'src/components/shared/logo/logo';

describe('<Logo />', () => {
    it('should render Logo and match snapshot', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper).toMatchSnapshot();
    });
});
