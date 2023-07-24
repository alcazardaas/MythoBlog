import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import Comment from './Comment';
import { commentMock } from 'mocks/comments.mock';

describe('Comment', () => {
  test('renders Comment', () => {
    render(
      <Provider store={store}>
        <Comment item={commentMock} handleDelete={() => {}} handleUpdate={() => {}} />
      </Provider>
    );

    const commentBody = screen.getByText(commentMock.body);
    expect(commentBody).toBeInTheDocument();
  });

  test('displays edited label if comment is edited', () => {
    const editedCommentMock = { ...commentMock, edited: true };
    render(
      <Provider store={store}>
        <Comment item={editedCommentMock} handleDelete={() => {}} handleUpdate={() => {}} />
      </Provider>
    );

    const editedLabel = screen.getByText('Edited');
    expect(editedLabel).toBeInTheDocument();
  });

  test('opens edit comment dialog when edit icon is clicked', () => {
    const handleUpdateMock = jest.fn();
    render(
      <Provider store={store}>
        <Comment item={commentMock} handleDelete={() => {}} handleUpdate={handleUpdateMock} />
      </Provider>
    );

    const editIcon = screen.getByLabelText('Edit Comment');
    fireEvent.click(editIcon);

    const editDialog = screen.getByLabelText('Edit Comment Dialog');
    expect(editDialog).toBeInTheDocument();
  });

  test('opens delete comment dialog when delete icon is clicked', () => {
    const handleDeleteMock = jest.fn();
    render(
      <Provider store={store}>
        <Comment item={commentMock} handleDelete={handleDeleteMock} handleUpdate={() => {}} />
      </Provider>
    );

    const deleteIcon = screen.getByLabelText('Delete Comment');
    fireEvent.click(deleteIcon);

    const deleteDialog = screen.getByLabelText('Delete Comment Dialog');
    expect(deleteDialog).toBeInTheDocument();
  });

  test('calls handleDelete when delete dialog is confirmed', () => {
    const handleDeleteMock = jest.fn();
    render(
      <Provider store={store}>
        <Comment item={commentMock} handleDelete={handleDeleteMock} handleUpdate={() => {}} />
      </Provider>
    );

    const deleteIcon = screen.getByLabelText('Delete Comment');
    fireEvent.click(deleteIcon);

    const confirmButton = screen.getByText('Delete');
    fireEvent.click(confirmButton);

    expect(handleDeleteMock).toHaveBeenCalledWith(commentMock.id);
  });
});
