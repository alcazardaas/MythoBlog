import styled from 'styled-components';
import { DialogContent, DialogTitle, Paper } from '@mui/material';

export const PostPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostContainer = styled(Paper)`
  width: 100%;
  max-width: 1000px;
  padding-top: 130px;
`;

export const PostHeader = styled(DialogTitle)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PostContent = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 50px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const PostImageContainer = styled.div`
  width: 50%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PostImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const PostBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 50%;
  padding: 0 50px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

export const PostBody = styled.p`
  font-size: 16px;
  margin-top: 0;
`;

export const PostTitle = styled.h1`
  font-size: 24px;
  margin-top: 0;
`;

export const CommentsSection = styled.div`
  padding: 0 50px 50px;
`;
