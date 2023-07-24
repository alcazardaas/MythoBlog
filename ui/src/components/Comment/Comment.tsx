import { displayDate } from 'util/displayDate';
import { IProps } from './IProps';
import { CommentContainer, CommentBodyContainer, CommentTitle, CommentDescription, CommentFooter, CommentDate, CommentOptions, CommentReply, IconContainer, CommentHeader, CommentEdited } from './styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from 'react';
import ConfirmDialog from 'components/ConfirmDialog/ConfirmDialog';
import EditCommentDialog from 'components/EditCommentDialog/EditCommentDialog';
import { IComment } from 'modals/posts/Modals';

const Comment = ({ item, handleDelete, handleUpdate }: IProps): JSX.Element => {

  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [editedComment, setEditedComment] = useState<IComment>(item);

  const handleShowEdit = (): void => {
    setShowEdit(true);
  };

  const handleCloseEdit = (): void => {
    setShowEdit(false);
  };

  const saveEditComment = (): void => {
    handleUpdate(editedComment);
  };

  const deleteComment = (): void => {
    handleDelete(item.id);
    setShowEdit(false);
  };

  const handleOpenDialog = (): void => {
    setShowConfirm(true);
  };

  const handleCloseDialog = (): void => {
    setShowConfirm(false);
  };

  const handleConfirm = (): void => {
    handleDelete(item.id);
    setShowConfirm(false);
  };

  // Method to check if the user is the owner of the comment
  const isOwner = (): boolean => {
    return item.userId === sessionStorage.getItem('userId');
  };

  return (
    <>
      <CommentContainer>
        <CommentBodyContainer>
          <CommentHeader>
            <CommentTitle>{item.userName}</CommentTitle>
            { item.edited && <CommentEdited>Edited</CommentEdited>}
          </CommentHeader>
          <CommentDescription>{item.body}</CommentDescription>
        </CommentBodyContainer>
        <CommentFooter>
          <CommentDate>{displayDate(item.date)}</CommentDate>
          <CommentOptions>
            {
              isOwner() ? <>
                <IconContainer onClick={handleShowEdit}>
                  <EditOutlinedIcon />
                </IconContainer>
                <IconContainer onClick={handleOpenDialog}>
                  <DeleteOutlineOutlinedIcon />
                </IconContainer>
              </> :
                <CommentReply>Reply</CommentReply>
            }
          </CommentOptions>
        </CommentFooter>
      </CommentContainer>
      {showConfirm && <ConfirmDialog title='Delete comment' message='Are you sure you want to delete this comment?' confirmText='Delete' cancelText='Cancel' onCancel={handleCloseDialog} onConfirm={handleConfirm} />}
      {showEdit && <EditCommentDialog title='Edit your comment' comment={item} onClose={handleCloseEdit} onDelete={deleteComment} onEdit={saveEditComment} editComment={setEditedComment} />}
    </>
  );
};
export default Comment;
