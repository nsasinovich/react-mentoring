import { shallow } from 'enzyme';
import React from 'react';
import { PosterSizes } from 'src/constants/app_constants';
import Poster from 'src/components/shared/poster/poster';

describe('<Poster />', () => {
    it('should render Poster and match snapshot', () => {
        const wrapper = shallow(<Poster />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Poster with image from url passed', () => {
        const posterUrl = 'https://cdn.miramax.com/media/assets/Pulp-Fiction1.png';
        const wrapper = shallow(<Poster imgUrl={posterUrl} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().children.props.src).toBe(posterUrl);
    });

    it('should render large Poster when large size is passed', () => {
        const wrapper = shallow(<Poster posterSize={PosterSizes.LARGE} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().className).toContain(PosterSizes.LARGE);
    });
});
