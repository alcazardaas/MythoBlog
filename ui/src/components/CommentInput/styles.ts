import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 24px 25px;
  margin-top: 1em;
`;

export const CommentInp = styled.textarea`
  flex: 1;
  border: none;
  font-size: 16px;
  resize: none;
  overflow: hidden;
  outline: none;
  overflow: auto;
`;

export const CommentButton = styled.button`
  background-color: #f6f6f6;
  border: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  color: #949494;
  text-transform: uppercase;

  &:hover {
    color: var(--over--comment-options);;
  }
`;
