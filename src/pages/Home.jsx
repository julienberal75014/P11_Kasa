import Banner from "../components/Banner";
import styled from "styled-components";
import Card from "../components/Card";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;

  @media (max-width: 768px) {
    padding: 0px 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  border-radius: 25px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    background: #ffffff;
    border-radius: 0px;
    width: 100%;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CardContainer>
        <Card />
      </CardContainer>
    </HomeContainer>
  );
}

export default Home;
