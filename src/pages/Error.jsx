import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-top: 130px;
`;

const ErrorText = styled.p`
  color: #ff6060;
  font-size: 288px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 890px) {
    font-size: 96px;
  }
`;

const ErrorText2 = styled.p`
  color: #ff6060;
  font-size: 36px;
  margin: 0px 0px 182px 0px;

  @media (max-width: 890px) {
    font-size: 18px;
    text-align: center;
    margin: 0px 57px;
`;

const RedirectionLink = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  text-decoration-line: underline;

  @media (max-width: 890px) {
    font-size: 14px;
    margin-top: 80px;
  }
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorText>404</ErrorText>
      <ErrorText2>Oups! La page que vous demandez n'existe pas.</ErrorText2>
      <RedirectionLink to="/">Retourner sur la page d'accueil</RedirectionLink>
    </ErrorContainer>
  );
}

export default Error;
