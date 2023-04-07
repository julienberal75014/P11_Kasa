import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const MainLogo = styled.img`
  width: 210px;
  height: auto;

  @media (max-width: 768px) {
    width: 115px;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  gap: 57px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #ff6060;
  font-size: 24px;

  &:hover {
    text-decoration-line: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px 0px 100px;

  @media (max-width: 768px) {
    padding: 20px 20px 0px 20px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <MainLogo src={Logo} alt="Logo Kasa" />
      <LinkDiv>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </LinkDiv>
    </HeaderContainer>
  );
}

export default Header;
