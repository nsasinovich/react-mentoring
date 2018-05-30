import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import SearchResultsList from 'src/components/search_results_list/search_results_list';
import NoResults from 'src/components/no_results/no_results';
import AssetTile from 'src/components/asset_tile/asset_tile';
import { SortingOptions, INITIAL_STATE } from 'src/constants/app_constants';

const mockStore = configureStore();

const { sortingField } = SortingOptions.RATING;
let store;

describe('<SearchResultsList />', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
    });

    it('should render SearchResultsList and match snapshot', () => {
        const wrapper = shallow(<SearchResultsList sortField={sortingField} store={store} />).dive();
        expect(wrapper).toMatchSnapshot();
    });

    it('should render NoResults if results array is empty', () => {
        const wrapper = shallow(<SearchResultsList results={[]} sortField={sortingField} store={store} />).dive();

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<NoResults />)).toBe(true);
    });

    it('should render AssetTiles if results are passed', () => {
        const wrapper = shallow(<SearchResultsList store={store} sortField={sortingField} />).dive();

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(AssetTile)).toHaveLength(INITIAL_STATE.results.length);
    });
});
