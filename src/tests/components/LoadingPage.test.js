import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from 'enzyme';

let wrapper;

beforeEach( () => {
    wrapper = shallow(<LoadingPage />);
});

test('should render LoadingPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});