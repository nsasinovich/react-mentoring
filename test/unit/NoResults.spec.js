import { shallow } from 'enzyme';
import React from 'react';
import NoResults from 'src/components/no_results/no_results';

describe('<NoResults />', () => {
    it('should render NoResults and match snapshot', () => {
        const wrapper = shallow(<NoResults />);
        expect(wrapper).toMatchSnapshot();
    });
});
