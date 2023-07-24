import React, { useState } from "react";
import { IProps } from "./IProps";
import {
  DialogContainer,
  DialogOverlay,
  DialogTitle,
  TextArea,
  CharCount,
  ButtonContainer,
  DeleteButton,
  SaveButton,
  DialogHeader,
  CloseButton,
  CloseIcon,
} from "./styles";

const EditCommentDialog = ({ title, comment, onClose, onDelete, 
  onEdit, editComment }: IProps): JSX.Element => {
  const { body } = comment;
  const [commentVal, setCommentVal] = useState(body);
  const MAX_CHARACTERS = 240;

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentVal(event.target.value);
    editComment({ ...comment, body: event.target.value, edited: true, date: new Date() });
  };

  const handleDeleteComment = (): void => {
    onDelete();
    onClose();
  };

  const handleUpdateComment = (): void => {
    onEdit();
    onClose();
  };

  const closeEditDialog = (): void => {
    onClose();
  };

  return (
    <DialogOverlay>
      <DialogContainer>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <CloseButton onClick={closeEditDialog} >
            <CloseIcon />
          </CloseButton>
        </DialogHeader>
        <TextArea
          placeholder="Enter your comment"
          value={commentVal}
          onChange={handleCommentChange}
          maxLength={MAX_CHARACTERS}
        />
        <CharCount>{commentVal.length}/{MAX_CHARACTERS}</CharCount>
        <ButtonContainer>
          <DeleteButton onClick={handleDeleteComment}>Delete Comment</DeleteButton>
          <SaveButton onClick={handleUpdateComment}>Save</SaveButton>
        </ButtonContainer>
      </DialogContainer>
    </DialogOverlay>
  );
};

export default EditCommentDialog;
