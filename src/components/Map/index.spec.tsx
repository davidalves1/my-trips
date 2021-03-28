import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in the correct place', () => {
    const place1 = {
      id: '1',
      name: 'Baixo Guandu',
      slug: 'baixo-guandu',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };
    const place2 = {
      id: '2',
      name: 'Joinville',
      slug: 'joinville',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    render(<Map places={[place1, place2]} />);

    expect(screen.getByTitle(/baixo guandu/i)).toBeInTheDocument();
    expect(screen.getByTitle(/joinville/i)).toBeInTheDocument();
  });
});
