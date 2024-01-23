// Footer.test.tsx
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../Components/Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 Your Company. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders GitHub icon with a link', () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github'));
  });

  it('renders Mail icon with a mailto link', () => {
    render(<Footer />);
    const mailLink = screen.getByLabelText('Mail');
    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute('href', 'mailto:lucas12alfredsson@gmail.com');
  });

  it('clicking GitHub icon opens a new tab with GitHub link', () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText('GitHub');
    const githubUrl = 'https://github.com/lauax';

    
    act(() => {
      userEvent.click(githubLink);
    });

    
    expect(window.open).toHaveBeenCalledWith(githubUrl, '_blank');
  });
});
