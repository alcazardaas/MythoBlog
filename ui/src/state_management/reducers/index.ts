import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts/posts.reducer';
import notificationReducer from './notification/notification.reducer';
import commentsReducer from './comments/comments.reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  notification: notificationReducer,
});
