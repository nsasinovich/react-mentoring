import { shallow, mount } from 'enzyme';
import React from 'react';
import SearchResultsErrorBoundary from 'src/components/search_results_list/search_results_error_boundary/search_results_error_boundary';

describe('<SearchResultsErrorBoundary />', () => {
    it('should render SearchResultsErrorBoundary and match snapshot', () => {
        const wrapper = shallow(<SearchResultsErrorBoundary>
            <div>Test</div>
        </SearchResultsErrorBoundary>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render SearchResultsErrorBoundary with error', () => {
        const wrapper = shallow(<SearchResultsErrorBoundary>
            <div>Test</div>
        </SearchResultsErrorBoundary>);
        wrapper.setState({ hasError: true });

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.state().hasError).toEqual(true);
        expect(wrapper.containsMatchingElement(<h1 className="error-boundary">Something went wrong.</h1>)).toBe(true);
    });

    it('should catch errors with componentDidCatch', () => {
        jest.spyOn(SearchResultsErrorBoundary.prototype, 'componentDidCatch');

        const wrapper = mount(<SearchResultsErrorBoundary>
            <div>Test</div>
        </SearchResultsErrorBoundary>);
        wrapper.instance().componentDidCatch();

        expect(wrapper.state().hasError).toEqual(true);
        expect(SearchResultsErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled();
    });
});
