import React from "react";
import { useState } from "react";
import { CommentButton, CommentInp, CommentContainer } from "./styles";
import { IProps } from "./IProps";

export const CommentInput = ({placeholder, buttonText, onSubmit}: IProps): JSX.Element => {
  const [comment, setComment] = useState('');

  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (): void => {
    onSubmit(comment);
    setComment('');
  };

  return (
    <CommentContainer>
      <CommentInp placeholder={placeholder} value={comment} onChange={handleComment} />
      <CommentButton onClick={handleCommentSubmit}>{buttonText}</CommentButton>
    </CommentContainer>
  );
}
