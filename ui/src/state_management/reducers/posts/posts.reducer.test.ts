import { PostsActionTypes } from 'state_management/actions/posts/actionTypes';
import PostsReducer, { initialState } from './posts.reducer';

describe('Posts Reducer', () => {
  test('default', () => {
    expect(PostsReducer(initialState, {} as never)).toEqual(initialState);
  });

  test('missing state', () => {
    expect(PostsReducer(undefined, {} as never)).toEqual(initialState);
  });
});
