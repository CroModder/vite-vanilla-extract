import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
