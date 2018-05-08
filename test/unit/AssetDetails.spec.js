import { shallow } from 'enzyme';
import React from 'react';
import { PosterSizes } from 'src/constants/app_constants';
import Poster from 'src/components/shared/poster/poster';
import AssetDetails from 'src/components/asset_details/asset_details';

describe('<AssetDetails />', () => {
    it('should render AssetDetails and match snapshot', () => {
        const wrapper = shallow(<AssetDetails />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain large Poster', () => {
        const wrapper = shallow(<AssetDetails />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<Poster posterSize={PosterSizes.LARGE} />)).toBe(true);
    });
});
