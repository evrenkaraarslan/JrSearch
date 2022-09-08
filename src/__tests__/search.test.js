import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/search/Search";

describe('Search renders', () => {
    it('should render the component onto the screen', () => {
        render(<Search />);
        expect(screen.getByTestId('searchInput')).toBeInTheDocument();
        expect(screen.getByTestId('searchButton')).toBeInTheDocument();
    });
});

describe('Button disabled in first render', () => {
    it('should render the component onto the screen', () => {
        render(<Search />);
        expect(screen.getByTestId('searchButton')).toBeDisabled();
    });
});

describe('Button enabled when length is longer than 3', () => {
    it('should enable the "Search" button when a valid input is entered', () => {
        render(<Search />);
 
        expect(screen.getByTestId('searchButton')).toBeDisabled();
 
        const input = screen.getByTestId('searchInput');
        fireEvent.change(input, {target: {value: 'More than 3 char'}});
 
        expect(screen.getByTestId('searchButton')).toBeEnabled();
    });
});

describe('Button disabled when length is shorter than 3', () => {
    it('should disabled the "Search" button when a invalid input is entered', () => {
        render(<Search />);
 
        expect(screen.getByTestId('searchButton')).toBeDisabled();
 
        const input = screen.getByTestId('searchInput');
        fireEvent.change(input, {target: {value: 'ev'}});
 
        expect(screen.getByTestId('searchButton')).toBeDisabled();
    });
});

