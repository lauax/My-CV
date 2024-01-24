
import '@testing-library/jest-dom';
import { describe, fireEvent, render, screen } from '@testing-library/react';
import Projects from './Projects';

// Mock data for testing
const mockProjects = [
  {
    title: 'Project 1',
    description: 'Description 1',
    link: 'https://example.com/project1',
    image: 'project1.jpg',
  },
  // Add more mock projects as needed
];

// Mock the data module
jest.mock('../../../data/Portfolio.json', () => mockProjects);

describe('Projects Component', () => {
  it('renders projects with correct data', () => {
    render(<Projects />);
    
    // Check if each project is rendered
    mockProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      expect(screen.getByTestId('hero-image')).toHaveStyle(`background-image: url(${project.image})`);
    });
  });

  it('scrolls to the next project on wheel event', () => {
    render(<Projects />);

    // Mock window.scrollTo to check if it is called with the correct arguments
    const originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();

    // Trigger a wheel event
    fireEvent.wheel(window, { deltaY: 100 });

    // Expect window.scrollTo to be called with the correct arguments
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({
        top: expect.any(Number),
        behavior: 'smooth',
      })
    );

    // Restore the original window.scrollTo
    window.scrollTo = originalScrollTo;
  });
});
