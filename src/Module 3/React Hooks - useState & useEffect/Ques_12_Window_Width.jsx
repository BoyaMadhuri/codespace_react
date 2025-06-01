const isClient = typeof window === 'object';

const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 0);
useEffect(() => {
  if (!isClient) return;

  try {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  } catch (error) {
    console.error('Error setting up resize listener:', error);
  }
}, []);
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Ques_12_Window_Width from './Ques_12_Window_Width';

test('initializes with window width and updates on resize', () => {
  // Mock window.innerWidth
  global.innerWidth = 1024;

  render(<Ques_12_Window_Width />);
  expect(screen.getByText(/current window width/i)).toHaveTextContent('1024px');

  // Change window width and dispatch resize event
  global.innerWidth = 800;
  global.dispatchEvent(new Event('resize'));

  // Wait for component to update
  expect(screen.getByText(/current window width/i)).toHaveTextContent('800px');
});


