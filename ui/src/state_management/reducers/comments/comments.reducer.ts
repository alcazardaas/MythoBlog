import { IComment } from "modals/posts/Modals";
import { CommentsActions, CommentsActionTypes } from "state_management/actions/comments/actionTypes";

export interface CommentsState {
  commentsList: Array<IComment>;
  selectedComment: IComment | null;
}

export const initialState: CommentsState = {
  commentsList: [],
  selectedComment: null,
};

const CommentsReducer = (state = initialState, action: CommentsActions) => {
  switch (action.type) {
    case CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID_SUCCESS:
      return {
        ...state,
        commentsList: action.payload.data,
      };

    case CommentsActionTypes.GET_COMMENT_BY_ID_SUCCESS:
      return {
        ...state,
        selectedComment: action.payload.data,
      };

    case CommentsActionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        commentsList: [...state.commentsList, action.payload.data],
      };

    case CommentsActionTypes.UPDATE_COMMENT_BY_ID_SUCCESS:
      return {
        ...state,
        commentsList: state.commentsList.map((comment) => {
          if (comment.id === action.payload.data.id) {
            return action.payload.data;
          }
          return comment;
        }),
      };

    case CommentsActionTypes.DELETE_COMMENT_BY_ID_SUCCESS:
      return {
        ...state,
        commentsList: state.commentsList.filter((comment) => comment.id !== action.payload.request.responseURL.split('/').pop()),
      };

    default:
      return state;
  }
}

export default CommentsReducer;
