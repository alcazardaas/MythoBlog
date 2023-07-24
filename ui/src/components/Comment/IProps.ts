import { IComment } from 'modals/posts/Modals';

export interface IProps {
  item: IComment;
  handleDelete: (commentId: string) => void;
  handleUpdate: (comment: IComment) => void;
}
