import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { PosterSizes, INITIAL_STATE } from 'src/constants/app_constants';
import AssetTile from 'src/components/asset_tile/asset_tile';
import Poster from 'src/components/shared/poster/poster';

const mockStore = configureStore();

const assetMock = {
    poster_path: 'poster_path',
    genres: ['genre1', 'genre2'],
    release_date: '2017-06-06',
};

let store;
let wrapper;

describe('<AssetTile />', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
        wrapper = shallow(<AssetTile asset={assetMock} store={store}/>).dive();
    });

    it('should render AssetTile and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain Poster element', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<Poster posterSize={PosterSizes.MEDIUM} imgUrl={assetMock.poster_path} />)).toBe(true);
    });
});
