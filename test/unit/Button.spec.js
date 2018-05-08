import { shallow } from 'enzyme';
import React from 'react';
import Button from 'src/components/shared/button/button';

describe('<Button />', () => {
    it('should render Button and match snapshot', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Button with text passed', () => {
        const buttonText = 'test';
        const wrapper = shallow(<Button>{buttonText}</Button>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().children).toBe(buttonText);
    });

    it('should set class to Button', () => {
        const buttonClass = 'test';
        const wrapper = shallow(<Button buttonClass={buttonClass}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().className).toContain(buttonClass);
    });
});
