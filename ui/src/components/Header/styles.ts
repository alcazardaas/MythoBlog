import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 97%;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1;

  @media (max-width: 500px) {
    width: 92%;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const User = styled.p`
  padding-right: 20px;

  @media (max-width: 500px) {
    padding-right: 10px;
  }
`;
