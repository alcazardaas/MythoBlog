import { render, screen, fireEvent } from '@testing-library/react';
import EditCommentDialog from './EditCommentDialog';
import { commentMock } from 'mocks/comments.mock';

describe('EditCommentDialog', () => {
  const onCloseMock = jest.fn();
  const onDeleteMock = jest.fn();
  const onEditMock = jest.fn();
  const editCommentMock = jest.fn();

  beforeEach(() => {
    render(
      <EditCommentDialog
        title="Edit your comment"
        comment={commentMock}
        onClose={onCloseMock}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
        editComment={editCommentMock}
      />
    );
  });

  test('renders EditCommentDialog', () => {
    const dialogTitle = screen.getByText('Edit your comment');
    expect(dialogTitle).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const closeButton = screen.getByLabelText('Close Button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  test('calls onDelete and onClose when delete button is clicked', () => {
    const deleteButton = screen.getByText('Delete Comment');
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalled();
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('calls onEdit and onClose when save button is clicked', () => {
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(onEditMock).toHaveBeenCalled();
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('calls editComment when comment value is changed', () => {
    const textarea = screen.getByPlaceholderText('Enter your comment');
    fireEvent.change(textarea, { target: { value: 'Updated comment' } });

    expect(editCommentMock).toHaveBeenCalledWith({
      ...commentMock,
      body: 'Updated comment',
      edited: true,
      date: expect.any(Date),
    });
  });
});
