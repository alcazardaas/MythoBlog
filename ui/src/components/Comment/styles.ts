import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: block;
  background-color: #F6F6F6;
  padding: 24px 25px 24px 25px;
  margin-top: 1em;
`;

export const CommentBodyContainer = styled.div`
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentTitle = styled.h3`
  margin: 10px 0;
`;

export const CommentEdited = styled.span`
  font-size: 14px;
  color: #949494;
`;

export const CommentDescription = styled.p`
  color: #172335;
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentDate = styled.span`
  font-size: 12px;
  color: #949494;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const CommentOptions = styled.div`
`;

export const CommentReply = styled.a`
  font-size: 12px;
  text-transform: uppercase;
  color: #172335;
  display: block;
  cursor: pointer;

  &:hover {
    color: var(--over--comment-options);;
  }
`;

export const IconContainer = styled.span`
  cursor: pointer;
  display: inline-block;

  &:first-of-type {
    margin-right: 1em;
  }

  &:hover {
    color: var(--over--comment-options);;
  }
`
