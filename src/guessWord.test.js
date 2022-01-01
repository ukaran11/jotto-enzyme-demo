import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/testUtils';

const setup = (state = {}) => {
    const wrapper = mount(<App />);
    console.log(wrapper.debug());
    // add value to the input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } });

    
    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    return wrapper;
}

describe('no words guessed', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        });
    });

    test('creates GuessedWords table with one row', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    });
});

describe('some words guessed', () => {

});

describe('guessed secret word', () => {

});