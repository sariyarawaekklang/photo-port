import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensures theres no leftover memory data that can give false results
afterEach(cleanup);

// declares the component being tested
describe('About component', () => {
    // first test; verifies the component is rendering
    it('renders', () => {
        render(<About />);
    });

    // second test; compares snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})