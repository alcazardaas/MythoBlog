import { ThunkAction } from 'redux-thunk';
import { GetAllPostsAction, PostsActionTypes, PostsActions } from './actionTypes';
import { AppState } from 'state_management/store';

type ThunkResult<R> = ThunkAction<R, AppState, undefined, PostsActions>;

export const getAllPosts = (): GetAllPostsAction => {
  return {
    type: PostsActionTypes.GET_ALL_POSTS,
    payload: {
      request: {
        method: 'get',
        url: '/posts',
      },
    },
  };
};

export const getPostById = (id: string): ThunkResult<void> => {
  return (dispatch) => {
    dispatch({
      type: PostsActionTypes.GET_POST_BY_ID,
      payload: {
        request: {
          method: 'get',
          url: `/posts/${id}`,
        },
      },
    });
  };
};
