import { shallow } from 'enzyme';
import React from 'react';
import { PosterSizes } from 'src/constants/app_constants';
import Poster from 'src/components/shared/poster/poster';
import AssetDetails from 'src/components/asset_details/asset_details';

let wrapper;

describe('<AssetDetails />', () => {
    beforeEach(() => {
        wrapper = shallow(<AssetDetails />);
    });

    it('should render AssetDetails and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain large Poster', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<Poster posterSize={PosterSizes.LARGE} />)).toBe(true);
    });
});
