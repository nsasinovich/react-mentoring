import { shallow } from 'enzyme';
import React from 'react';
import SearchResultsList from 'src/components/search_results_list/search_results_list';
import NoResults from 'src/components/no_results/no_results';
import AssetTile from 'src/components/asset_tile/asset_tile';
import { SortingOptions } from 'src/constants/app_constants';

const { sortingField } = SortingOptions.RATING;

describe('<SearchResultsList />', () => {
    it('should render SearchResultsList and match snapshot', () => {
        const wrapper = shallow(<SearchResultsList sortField={sortingField} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render NoResults if results array is empty', () => {
        const wrapper = shallow(<SearchResultsList results={[]} sortField={sortingField} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<NoResults />)).toBe(true);
    });

    it('should render AssetTiles if results are passed', () => {
        const resultAssets = [
            { title: 'Asset 1', year: 1995, rating: 1 },
            { title: 'Asset 2', year: 1994, rating: 3.53 },
            { title: 'Asset 3', year: 1993, rating: 3.55 },
            { title: 'Asset 4', year: 1989, rating: 4 },
            { title: 'Asset 5', year: 1988, rating: 5 },
        ];

        const wrapper = shallow(<SearchResultsList results={resultAssets} sortField={sortingField} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(AssetTile)).toHaveLength(resultAssets.length);
    });
});
