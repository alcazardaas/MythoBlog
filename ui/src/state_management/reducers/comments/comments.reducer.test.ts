import CommentsReducer, {initialState} from "./comments.reducer";
import {CommentsActionTypes} from "../../actions/comments/actionTypes";

describe('Comments Reducer', () => {
  test('default', () => {
    expect(CommentsReducer(initialState, {} as never)).toEqual(initialState);
  });

  test('missing state', () => {
    expect(CommentsReducer(undefined, {} as never)).toEqual(initialState);
  });
});
