import { shallow } from 'enzyme';
import React from 'react';
import AssetTile from 'src/components/asset_tile/asset_tile';
import Poster from 'src/components/shared/poster/poster';

describe('<AssetTile />', () => {
    it('should render AssetTile and match snapshot', () => {
        const wrapper = shallow(<AssetTile />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain Poster element', () => {
        const wrapper = shallow(<AssetTile />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<Poster />)).toBe(true);
    });
});
