import { ThunkAction } from 'redux-thunk';
import { IComment } from 'modals/posts/Modals';
import { AppState } from 'state_management/store';
import { CommentsActionTypes, CommentsActions, CreateCommentAction, DeleteCommentByIdAction, UpdateCommentByIdAction } from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

type ThunkResult<R> = ThunkAction<R, AppState, undefined, CommentsActions>;

export const getAllCommentsByPostId = (postId: string): ThunkResult<void> => {
  return (dispatch) => {
    dispatch({
      type: CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID,
      payload: {
        request: {
          method: 'get',
          url: `/comments?postId=${postId}`,
        },
      },
    });
  };
}

export const getCommentById = (id: string): ThunkResult<void> => {
  return (dispatch) => {
    dispatch({
      type: CommentsActionTypes.GET_COMMENT_BY_ID,
      payload: {
        request: {
          method: 'get',
          url: `/comments/${id}`,
        },
      },
    });
  };
}

export const createComment = (comment: IComment): CreateCommentAction => {
  // Set id with uuid, userId and userName with session storage
  comment.id = uuidv4();
  comment.userId = sessionStorage.getItem('userId') || '';
  comment.userName = sessionStorage.getItem('userName') || '';

  return {
    type: CommentsActionTypes.CREATE_COMMENT,
      payload: {
        request: {
          method: 'post',
          url: '/comments',
          data: comment,
      },
    },
  };
};

export const updateCommentById = (comment: IComment): UpdateCommentByIdAction => {
  comment.userId = sessionStorage.getItem('userId') || '';
  comment.userName = sessionStorage.getItem('userName') || '';
  return {
    type: CommentsActionTypes.UPDATE_COMMENT_BY_ID,
    payload: {
      request: {
        method: 'put',
        url: `/comments/${comment.id}`,
        data: comment,
      },
    },
  };
};

export const deleteCommentById = (id: string): DeleteCommentByIdAction => {
  return {
    type: CommentsActionTypes.DELETE_COMMENT_BY_ID,
    payload: {
      request: {
        method: 'delete',
        url: `/comments/${id}`,
      },
    },
  };
};

export const closeCommentDialog = (): ThunkResult<void> => {
  return (dispatch) => {
    dispatch({
      type: CommentsActionTypes.CLOSE_COMMENTS_DIALOG,
    });
  };
}
