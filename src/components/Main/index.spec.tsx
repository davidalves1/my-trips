import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(screen.getByRole('heading', { name: /nextjs app/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /my awesome web app/i })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render ther colors correctly', () => {
    const { container } = render(<Main />);

    // How to test styles
    expect(container.firstChild).toHaveStyle({ 'background-color': '#efefef' });
  });
});
