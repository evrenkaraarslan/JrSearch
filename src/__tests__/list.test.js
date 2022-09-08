import { render, screen } from "@testing-library/react";
import List from "../components/list/List";

describe('Pagination should render in first mount', () => {
    it('should render the component onto the screen', () => {
        render(<List />);
        expect(screen.getByTestId('listMain')).toBeInTheDocument();
    });
});