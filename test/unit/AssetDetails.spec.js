import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { PosterSizes, INITIAL_STATE } from 'src/constants/app_constants';
import Poster from 'src/components/shared/poster/poster';
import AssetDetails from 'src/components/asset_details/asset_details';

const mockStore = configureStore();

const assetMock = {
    poster_path: 'poster_path',
    genres: ['genre1', 'genre2'],
};

let store;
let wrapper;

describe('<AssetDetails />', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
        wrapper = shallow(<AssetDetails asset={assetMock} store={store}/>).dive();
    });

    it('should render AssetDetails and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain large Poster', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<Poster posterSize={PosterSizes.LARGE} imgUrl={'poster_path'} />)).toBe(true);
    });
});
