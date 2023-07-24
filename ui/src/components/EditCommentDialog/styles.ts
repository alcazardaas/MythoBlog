import styled from "styled-components";

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
  width: 674px;
  max-width: 90%;
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DialogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const CloseButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 2px;
    background-color: #000;
    transform: translate(-50%, -50%);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const TextArea = styled.textarea`
  width: 97%;
  height: 120px;
  padding: 8px;
  border: 1px solid #0061C0;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 16px;
`;

export const CharCount = styled.div`
  text-align: right;
  color: #172335;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DeleteButton = styled.button`
  margin-right: 8px;
  background-color: #fff;
  color: #004A93;
  border: 1px solid #004A93;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: #004A93;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
