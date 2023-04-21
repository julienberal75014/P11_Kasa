import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  padding: 56px 10px;

  @media (max-width: 768px) {
    padding: 0px;
    width: 100%;
  }
`;

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardImg = styled.img`
  background: url(${(props) => props.src});
  width: 340px;
  height: 340px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 454px;
  }
`;

const CardGradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  width: 340px;
  height: 340px;
  position: absolute;
  border-radius: 10px;
  display: flex;
  align-items: end;
  white-space: normal;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 454px;
  }
`;

const CardTitle = styled.p`
  color: #ffffff;
  font-size: 18px;
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
`;

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <CardWrapper>
      {data.map(({ id, title, cover }) => (
        <Link to={`/housing/${id}`} key={id} style={{ position: "relative" }}>
          <CardBlock>
            <CardImg src={cover} alt={title} />
            <CardGradient>
              <CardTitle>{title}</CardTitle>
            </CardGradient>
          </CardBlock>
        </Link>
      ))}
    </CardWrapper>
  );
}

export default Card;
