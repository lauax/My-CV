
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Projects from './Projects';

const mockProjects = [
  {
    title: 'Star-bomb',
    description: 'Star-bomb är ett spel där du spelar 1 mot 1 och ska göra mål med bomberna eller få över bomberna på motståndarens sida innan dem sprängs de är roliga sound effects och bra musik',
    link: 'https://star-bomb.netlify.app/',
    image: '../Images/Starbomb.jpg',
  },
];

jest.mock('../../../data/Portfolio.json', () => mockProjects);

describe('Projects Component', () => {
  it('renders projects with correct data', () => {
    render(<Projects />);
    
    
    mockProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      expect(screen.getByTestId('hero-image')).toHaveStyle(`background-image: url(${project.image})`);
    });
  });

  it('scrolls to the next project on wheel event', () => {
    render(<Projects />);

   
    const originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();

    
    fireEvent.wheel(window, { deltaY: 100 });

    
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({
        top: expect.any(Number),
        behavior: 'smooth',
      })
    );

    
    window.scrollTo = originalScrollTo;
  });
});
