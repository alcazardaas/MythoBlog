import { useAppDispatch, useAppSelector } from 'state_management/hooks';
import {
  PostBody,
  PostBodyContainer,
  PostContainer,
  PostContent,
  PostHeader,
  PostImage,
  PostImageContainer,
  PostTitle,
  CommentsSection,
  PostPageContainer,
} from './styles';
import Comment from 'components/Comment/Comment';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPostById } from 'state_management/actions/posts/posts.actions';
import { CommentInput } from 'components/CommentInput/CommentInput';
import { createComment, deleteCommentById, getAllCommentsByPostId, updateCommentById } from 'state_management/actions/comments/comments.actions';
import { IComment } from 'modals/posts/Modals';

export const PostPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const selectedPost = useAppSelector((state) => state.posts.selectedPost);
  const { commentsList } = useAppSelector((state) => state.comments);

  useEffect(() => {
    if (id) {
      dispatch(getPostById(id) as any);
      dispatch(getAllCommentsByPostId(id) as any);
    }
  }, []);

  // Delete comment from the database dispatching the action deleteCommentById
  const deleteComment = (commentId: string) => {
    dispatch(deleteCommentById(commentId));
  };

  const handleUpdateComment = (comment: IComment) => {
    dispatch(updateCommentById(comment))
  }

  const drawComments = (): JSX.Element[] => {
    return commentsList.map((comment) => {
      return <Comment key={comment.id} item={comment}
        handleDelete={deleteComment}
        handleUpdate={handleUpdateComment}
      />;
    });
  };

  // Save comment to the database dispatching the action createComment
  const saveComment = (comment: string) => {
    const commentData: IComment = {
      id: '',
      postId: selectedPost?.id || '',
      userId: '',
      userName: '',
      body: comment,
      date: new Date(),
      edited: false,
    };
    dispatch(createComment(commentData));
  };

  return (
    <PostPageContainer>
      <PostContainer>
        <PostHeader>
        </PostHeader>
        {!selectedPost?.id ? <p>Loading...</p> :
          <PostContent>
            <PostImageContainer>
              <PostImage src={selectedPost.image} />
            </PostImageContainer>
            <PostBodyContainer>
              <PostTitle>{selectedPost.title}</PostTitle>
              <PostBody>{selectedPost.body}</PostBody>
            </PostBodyContainer>
          </PostContent>}
        <CommentsSection>
          <h3 style={{ color: '#172335' }} >{`Comments (${commentsList.length})`}</h3>
          {commentsList.length > 0 ? drawComments() : <div>No comments</div>}
          <CommentInput placeholder="Write your comment here..." buttonText="Send" onSubmit={saveComment} />
        </CommentsSection>
      </PostContainer>
    </PostPageContainer>
  );
};
