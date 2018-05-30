import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { INITIAL_STATE } from 'src/constants/app_constants';
import React from 'react';
import ResultsBar from 'src/components/results_bar/results_bar';

const mockStore = configureStore();

let store;

describe('<ResultsBar />', () => {
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
    });

    it('should render ResultsBar and match snapshot', () => {
        const wrapper = shallow(<ResultsBar store={store}/>).dive();
        expect(wrapper).toMatchSnapshot();
    });

    // it('should call changeCurrentSort handler when sorting option is clicked', () => {
    //     const onClickCallback = jest.fn();
    //     const props = {
    //         changeCurrentSort: onClickCallback,
    //     };

    //     const wrapper = shallow(<ResultsBar props={props} store={store} />).dive();
    //     expect(wrapper).toMatchSnapshot();

    //     const buttons = wrapper.find('.sorting-options li');
    //     buttons.forEach((btn) => {
    //         btn.simulate('click');
    //     });

    //     expect(onClickCallback).toHaveBeenCalledTimes(buttons.length);
    // });

    it('should show results count message', () => {
        const count = INITIAL_STATE.resultsCount;
        const wrapper = shallow(<ResultsBar store={store} />).dive();
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.results-count').prop('children')).toBe(`${count} movies found`);
    });
});

