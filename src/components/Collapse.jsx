import styled from "styled-components";
import { useState } from "react";
import Arrow from "../assets/arrow_down.png";

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6060;
  color: #ffffff;
  border-radius: 5px;
  width: auto;
  height: 47px;
  padding-left: 18px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 5px;
  width: auto;
  height: auto;
  text-align: justify;
  color: #ff6060;
  padding: 27px 18px 10px 18px;
  margin-bottom: 10px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;

const ArrowDownImg = styled.img`
  width: 24px;
  margin-left: auto;
  margin-right: 30px;

  @media (max-width: 768px) {
    width: 16px;
    margin-right: 20px;
  }
`;

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  const toogle = () => {
    setOpen(!open);
  };

  function rotateArrow() {
    if (open) {
      return "rotate(180deg)";
    }
    return "rotate(0deg)";
  }

  function changeFontSize() {
    if (window.innerWidth < 768) {
      return "16px";
    }
    return "24px";
  }

  return (
    <CollapseContainer>
      <TitleRow onClick={toogle}>
        <h2 style={{ fontSize: changeFontSize() }}>{title}</h2>
        <ArrowDownImg
          src={Arrow}
          alt="Arrow Down"
          style={{ transform: rotateArrow() }}
        />
      </TitleRow>
      {open && <Content>{content}</Content>}
    </CollapseContainer>
  );
}

export default Collapse;
