import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { checkProps, findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

// mock entire module for destructuring useState on inmport 
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))


const setup = (initialState={}, secretWord='party') => {
    const store = storeFactory(initialState);
    return mount(<Provider store={store}><Input secretWord={secretWord}/></Provider>);
}

describe('render', () => {

    describe('success is true', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: true});
        });

        test('Input renders without error', () => {
            const wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('Input box does not show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        });

        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        })

    });

    describe('success is false', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: false});
        });

        test('Input renders without error', () => {
            const wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('Input box does show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });

        test('submit button does show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        })
    });
});



test('does not throw warning with expected props', () => {
    checkProps(Input, { secretWord: 'party'})
});

describe('state controlled input field', () => {

    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup({ success: false });
    });

    afterEach(() => {
        React.useState = originalUseState;
    });
    
    test('state updates with value of input box upon changes', () => {
        // const mockSetCurrentGuess = jest.fn();
        // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const inputBox = findByTestAttr(wrapper, 'input-box');

        // Simulated a change event to input box
        const mockEvent = { target: { value: 'train' }};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('field is cleared upon submit button click', () => {
        // const mockSetCurrentGuess = jest.fn();
        // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const submitButton = findByTestAttr(wrapper, 'submit-button');

        submitButton.simulate('click', { preventDefault() {} });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
        // test
    })
})