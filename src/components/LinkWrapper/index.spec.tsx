import { render, screen } from '@testing-library/react';
import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">my link</LinkWrapper>);

    const children = screen.getByText(/my link/i);

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/my-link');
  });
});
