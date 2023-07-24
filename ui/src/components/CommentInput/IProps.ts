export interface IProps {
  placeholder: string;
  buttonText: string;
  onSubmit: (comment: string) => void;
}