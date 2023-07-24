import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import { selectedPost } from 'mocks/posts.mock';
import { PostPage } from './PostPage';
import { commentListMock } from 'mocks/comments.mock';

describe('PostPage', () => {
  test('renders PostPage', () => {
    render(
      <Provider store={store}>
        <PostPage />
      </Provider>,
    );
    expect(screen.getByText(selectedPost.title)).toBeInTheDocument();
  });

  test('displays loading message before selected post is fetched', () => {
    render(
      <Provider store={store}>
        <PostPage />
      </Provider>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays comments section with correct count', async () => {
    render(
      <Provider store={store}>
        <PostPage />
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getByText(`Comments (${commentListMock.length})`)).toBeInTheDocument();
    });
  });

  test('displays no comments message when there are no comments', async () => {
    render(
      <Provider store={store}>
        <PostPage />
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getByText('No comments')).toBeInTheDocument();
    });
  });
});
