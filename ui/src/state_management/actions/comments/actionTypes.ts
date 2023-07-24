import { AxiosErrorPayload, AxiosRequestPayload, AxiosSuccessPayload } from 'modals/axios/Modals';
import { IComment } from 'modals/posts/Modals';

export enum CommentsActionTypes {
  GET_ALL_COMMENTS_BY_POST_ID = 'GET_ALL_COMMENTS_BY_POST_ID',
  GET_ALL_COMMENTS_BY_POST_ID_SUCCESS = 'GET_ALL_COMMENTS_BY_POST_ID_SUCCESS',
  GET_ALL_COMMENTS_BY_POST_ID_FAIL = 'GET_ALL_COMMENTS_BY_POST_ID_FAIL',
  GET_COMMENT_BY_ID = 'GET_COMMENT_BY_ID',
  GET_COMMENT_BY_ID_SUCCESS = 'GET_COMMENT_BY_ID_SUCCESS',
  GET_COMMENT_BY_ID_FAIL = 'GET_COMMENT_BY_ID_FAIL',
  CREATE_COMMENT = 'CREATE_COMMENT',
  CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS',
  CREATE_COMMENT_FAIL = 'CREATE_COMMENT_FAIL',
  UPDATE_COMMENT_BY_ID = 'UPDATE_COMMENT_BY_ID',
  UPDATE_COMMENT_BY_ID_SUCCESS = 'UPDATE_COMMENT_BY_ID_SUCCESS',
  UPDATE_COMMENT_BY_ID_FAIL = 'UPDATE_COMMENT_BY_ID_FAIL',
  DELETE_COMMENT_BY_ID = 'DELETE_COMMENT_BY_ID',
  DELETE_COMMENT_BY_ID_SUCCESS = 'DELETE_COMMENT_BY_ID_SUCCESS',
  DELETE_COMMENT_BY_ID_FAIL = 'DELETE_COMMENT_BY_ID_FAIL',
  CLOSE_COMMENTS_DIALOG = 'CLOSE_COMMENTS_DIALOG',
}

export interface GetAllCommentsByPostIdAction extends AxiosRequestPayload {
  type: CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID;
}

export interface GetAllCommentsByPostIdActionSuccess
  extends AxiosSuccessPayload<Array<IComment>, CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
  GetAllCommentsByPostIdAction> {
  type: CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID_SUCCESS;
}

export interface GetAllCommentsByPostIdActionFail
  extends AxiosErrorPayload<CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID_FAIL, GetAllCommentsByPostIdAction> {
  type: CommentsActionTypes.GET_ALL_COMMENTS_BY_POST_ID_FAIL;
}

export interface GetCommentByIdAction extends AxiosRequestPayload {
  type: CommentsActionTypes.GET_COMMENT_BY_ID;
}

export interface GetCommentByIdActionSuccess
  extends AxiosSuccessPayload<IComment, CommentsActionTypes.GET_COMMENT_BY_ID_SUCCESS, GetCommentByIdAction> {
  type: CommentsActionTypes.GET_COMMENT_BY_ID_SUCCESS;
}

export interface GetCommentByIdActionFail
  extends AxiosErrorPayload<CommentsActionTypes.GET_COMMENT_BY_ID_FAIL, GetCommentByIdAction> {
  type: CommentsActionTypes.GET_COMMENT_BY_ID_FAIL;
}

export interface CreateCommentAction extends AxiosRequestPayload {
  type: CommentsActionTypes.CREATE_COMMENT;
}

export interface CreateCommentActionSuccess
  extends AxiosSuccessPayload<IComment, CommentsActionTypes.CREATE_COMMENT_SUCCESS, CreateCommentAction> {
  type: CommentsActionTypes.CREATE_COMMENT_SUCCESS;
}

export interface CreateCommentActionFail
  extends AxiosErrorPayload<CommentsActionTypes.CREATE_COMMENT_FAIL, CreateCommentAction> {
  type: CommentsActionTypes.CREATE_COMMENT_FAIL;
}

export interface UpdateCommentByIdAction extends AxiosRequestPayload {
  type: CommentsActionTypes.UPDATE_COMMENT_BY_ID;
}

export interface UpdateCommentByIdActionSuccess
  extends AxiosSuccessPayload<IComment, CommentsActionTypes.UPDATE_COMMENT_BY_ID_SUCCESS, UpdateCommentByIdAction> {
  type: CommentsActionTypes.UPDATE_COMMENT_BY_ID_SUCCESS;
}

export interface UpdateCommentByIdActionFail
  extends AxiosErrorPayload<CommentsActionTypes.UPDATE_COMMENT_BY_ID_FAIL, UpdateCommentByIdAction> {
  type: CommentsActionTypes.UPDATE_COMMENT_BY_ID_FAIL;
}

export interface DeleteCommentByIdAction extends AxiosRequestPayload {
  type: CommentsActionTypes.DELETE_COMMENT_BY_ID;
}

export interface DeleteCommentByIdActionSuccess
  extends AxiosSuccessPayload<IComment, CommentsActionTypes.DELETE_COMMENT_BY_ID_SUCCESS, DeleteCommentByIdAction> {
  type: CommentsActionTypes.DELETE_COMMENT_BY_ID_SUCCESS;
}

export interface DeleteCommentByIdActionFail
  extends AxiosErrorPayload<CommentsActionTypes.DELETE_COMMENT_BY_ID_FAIL, DeleteCommentByIdAction> {
  type: CommentsActionTypes.DELETE_COMMENT_BY_ID_FAIL;
}

export interface CloseCommentsDialogAction {
  type: CommentsActionTypes.CLOSE_COMMENTS_DIALOG;
}

export type CommentsActions =
  | GetAllCommentsByPostIdAction
  | GetAllCommentsByPostIdActionSuccess
  | GetAllCommentsByPostIdActionFail
  | GetCommentByIdAction
  | GetCommentByIdActionSuccess
  | GetCommentByIdActionFail
  | CreateCommentAction
  | CreateCommentActionSuccess
  | CreateCommentActionFail
  | UpdateCommentByIdAction
  | UpdateCommentByIdActionSuccess
  | UpdateCommentByIdActionFail
  | DeleteCommentByIdAction
  | DeleteCommentByIdActionSuccess
  | DeleteCommentByIdActionFail
  | CloseCommentsDialogAction;
