import { shallow } from 'enzyme';
import React from 'react';
import AssetTile from 'src/components/asset_tile/asset_tile';
import Poster from 'src/components/shared/poster/poster';

let wrapper;

describe('<AssetTile />', () => {
    beforeEach(() => {
        wrapper = shallow(<AssetTile />);
    });

    it('should render AssetTile and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain Poster element', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<Poster />)).toBe(true);
    });
});
