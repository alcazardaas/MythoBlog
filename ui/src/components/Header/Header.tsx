import React from 'react';
import { HeaderContainer, Logo, HeaderTitle, LogoContainer, User } from './styles';
import { useNavigate } from 'react-router-dom';

const Header = ({ logo }: { logo: string }) => {
  const [showLogo, setShowLogo] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setShowLogo(true);
  }, [logo]);

  const handleLogoClick = () => {
    navigate('/');
  };

  const getUser = () => {
    const user = sessionStorage.getItem('userName') || null;
    return user ? user : 'Login';
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={handleLogoClick}>
        {showLogo && <Logo src={logo} alt="logo" />}
        <HeaderTitle>Mytho</HeaderTitle>
      </LogoContainer>
      <User>{getUser()}</User>
    </HeaderContainer>
  );
};

export default Header;
