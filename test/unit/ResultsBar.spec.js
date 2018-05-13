import { shallow } from 'enzyme';
import React from 'react';
import ResultsBar from 'src/components/results_bar/results_bar';

describe('<ResultsBar />', () => {
    it('should render ResultsBar and match snapshot', () => {
        const wrapper = shallow(<ResultsBar />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onSortChange handler when sorting option is clicked', () => {
        const onClickCallback = jest.fn();
        const wrapper = shallow(<ResultsBar onSortChange={onClickCallback} />);
        expect(wrapper).toMatchSnapshot();

        const buttons = wrapper.find('.sorting-options li');
        buttons.forEach((btn) => {
            btn.simulate('click');
        });

        expect(onClickCallback).toHaveBeenCalledTimes(buttons.length);
    });

    it('should show results count message', () => {
        const count = 5;
        const wrapper = shallow(<ResultsBar count={count} />);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.results-count').prop('children')).toBe(`${count} movies found`);
    });
});

