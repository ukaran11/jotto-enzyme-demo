import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/testUtils';

const setup = (state = {}) => {
    const wrapper = mount(<App />);

    // add value to the input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } });

    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    return wrapper;
}