import styled from "styled-components";
import Logo from "../assets/logo_footer.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  height: 209px;
  background-color: #000000;
  width: 100%;
  position: relative;
  bottom: -66px;
  height: auto;
`;

const FooterLogo = styled.img`
  width: 122px;
  height: fit-content;
  margin-top: 66px;
`;

const FooterText = styled.p`
  color: #ffffff;
  font-size: 24px;
  margin: 0px 0px 29px 0px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0px 0px 50px 0px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={Logo} alt="Logo Kasa" />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  );
}

export default Footer;
