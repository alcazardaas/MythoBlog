import { deleteCommentById, getAllCommentsByPostId } from './comments.actions';
import { CommentsActionTypes } from './actionTypes';

describe('Comments actions', () => {
  test('getAllCommentsByPostId', () => {
    expect(getAllCommentsByPostId('1')).toEqual({
      payload: {
        request: {
          method: 'get',
          url: '/comments/1',
        },
      },
      type: CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID,
    });
  });

  test('deleteCommentById', () => {
    expect(deleteCommentById('1')).toEqual({
      payload: {
        request: {
          method: 'delete',
          url: '/comments/1',
        },
      },
      type: CommentsActionTypes.DELETE_COMMENT_BY_ID,
    });
  });
});