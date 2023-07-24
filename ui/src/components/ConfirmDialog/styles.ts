import styled from 'styled-components';

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const DialogContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 400px; /* Adjust the width as per your preference */
  max-width: 90%; /* Limit the maximum width to maintain responsiveness */
`;

export const DialogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const DialogMessage = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

export const DialogButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DialogButtonConfirm = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
`;

export const DialogButtonCancel = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;
