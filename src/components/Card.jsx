import { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  padding: 56px 50px;
`;

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  background: url(${(props) => props.src});
  width: 340px;
  height: 340px;
  border-radius: 10px;
  object-fit: cover;
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

  console.log(data);

  return (
    <CardWrapper>
      {data.map(({ id, title, cover }) => (
        <CardBlock key={id}>
          <CardImg src={cover} alt={title} />
          <CardGradient>
            <CardTitle>{title}</CardTitle>
          </CardGradient>
        </CardBlock>
      ))}
    </CardWrapper>
  );
}

export default Card;
