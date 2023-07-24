import { render, screen, fireEvent } from '@testing-library/react';
import { CommentInput } from './CommentInput';

describe('CommentInput', () => {
  test('renders the component', () => {
    render(
      <CommentInput
        placeholder="Enter your comment"
        buttonText="Submit"
        onSubmit={() => { }}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter your comment');
    const buttonElement = screen.getByText('Submit');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('handles comment input and submission', () => {
    const onSubmitMock = jest.fn();
    render(
      <CommentInput
        placeholder="Enter your comment"
        buttonText="Submit"
        onSubmit={onSubmitMock}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter your comment') as HTMLInputElement;
    const buttonElement = screen.getByText('Submit');

    fireEvent.change(inputElement, { target: { value: 'Test comment' } });
    expect(inputElement.value).toBe('Test comment');

    fireEvent.click(buttonElement);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith('Test comment');

    expect(inputElement.value).toBe('');
  });
});
