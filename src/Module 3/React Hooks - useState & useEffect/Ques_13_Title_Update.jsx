useEffect(() => {
  if (typeof document !== 'undefined' && document.title !== undefined) {
    document.title = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
  }
}, [count]);
import { render, screen, fireEvent } from '@testing-library/react';
import Ques_13_Title_Update from './Ques_13_Title_Update';

describe('Ques_13_Title_Update', () => {
  beforeEach(() => {
    document.title = 'Initial Title';
  });

  test('initial document title', () => {
    render(<Ques_13_Title_Update />);
    expect(document.title).toBe('Clicked 0 times');
  });

  test('updates document title on button click', () => {
    render(<Ques_13_Title_Update />);
    const button = screen.getByText(/Click me/i);

    fireEvent.click(button);
    expect(document.title).toBe('Clicked 1 time');

    fireEvent.click(button);
    expect(document.title).toBe('Clicked 2 times');
  });
});
