import { IProps } from "./IProps";
import { DialogButtonCancel, DialogButtonConfirm, DialogButtonContainer, DialogContainer, DialogMessage, DialogOverlay, DialogTitle } from "./styles";


const ConfirmDialog = ({ title, message, confirmText, cancelText, onConfirm, onCancel }: IProps): JSX.Element => {
  return (
    <DialogOverlay>
      <DialogContainer>
        <DialogTitle>{title}</DialogTitle>
        <DialogMessage>{message}</DialogMessage>
        <DialogButtonContainer>
          <DialogButtonCancel onClick={onCancel}>{cancelText}</DialogButtonCancel>
          <DialogButtonConfirm onClick={onConfirm}>{confirmText}</DialogButtonConfirm>
        </DialogButtonContainer>
      </DialogContainer>
    </DialogOverlay>
  );
};

export default ConfirmDialog;
