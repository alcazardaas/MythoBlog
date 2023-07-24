import { IComment } from "modals/posts/Modals";

export interface IProps {
  title: string;
  comment: IComment;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  editComment: (comment: IComment) => void;
}