import { shallow, mount } from 'enzyme';
import React from 'react';
import SearchHeader from 'src/components/search_header/search_header';
import SearchContainer from 'src/components/search_container/search_container';
import SearchResultsList from 'src/components/search_results_list/search_results_list';
import ResultsBar from 'src/components/results_bar/results_bar';

describe('<SearchContainer />', () => {
    it('should render SearchContainer and match snapshot', () => {
        const wrapper = shallow(<SearchContainer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call updated handleSortChange on sort option update', () => {
        jest.spyOn(SearchContainer.prototype, 'handleSortChange');

        const wrapper = mount(<SearchContainer />);
        expect(wrapper).toMatchSnapshot();

        const filterButton = wrapper.find('.sorting-options li').at(0);
        filterButton.simulate('click');

        expect(SearchContainer.prototype.handleSortChange).toHaveBeenCalledTimes(1);
    });

    it('should contain SearchHeader element', () => {
        const wrapper = mount(<SearchContainer />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<SearchHeader />)).toBe(true);
    });

    it('should contain ResultsBar element', () => {
        const wrapper = shallow(<SearchContainer />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ResultsBar)).toHaveLength(1);
    });

    it('should contain SearchResultsList element', () => {
        const wrapper = shallow(<SearchContainer />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(SearchResultsList)).toHaveLength(1);
    });
});
