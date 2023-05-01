import { useState } from "react";
import styled from "styled-components";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";

const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlideShowImg = styled.img`
  width: 100%;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
`;

const LeftArrowImg = styled.img`
  width: 47px;
  position: absolute;
  top: 31%;
  transform: translate(0; -50%);
  left: 200px;
  zindex: 1;
  cursor: pointer;
  margin-left: 8%;

  @media (max-width: 1700px) {
    left: 150px;
    margin-left: 4%;
  }

  @media (max-width: 1500px) {
    left: 125px;
    margin-left: 0px;
  }

  @media (max-width: 768px) {
    width: 24px;
    top: 28%;
    left: 50px;
  }

  @media (min-width: 350px) and (max-height: 850px) {
    top: 30%;
  }
`;

const RightArrowImg = styled.img`
  width: 47px;
  position: absolute;
  top: 31%;
  transform: translate(0; -50%);
  right: 200px;
  zindex: 1;
  cursor: pointer;
  margin-right: 8%;

  @media (max-width: 1700px) {
    right: 150px;
    margin-right: 4%;
  }

  @media (max-width: 1500px) {
    right: 125px;
    margin-right: 0px;
  }

  @media (max-width: 768px) {
    width: 24px;
    top: 28%;
    right: 50px;
  }

  @media (min-width: 350px) and (max-height: 850px) {
    top: 30%;
  }
`;

const NumberText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  bottom: 42%;
  right: 50%;
  left: 50%;
  width: max-content;

  @media (max-width: 768px) {
    bottom: 47%;
  }

  @media (min-width: 350px) and (max-height: 850px) {
    bottom: 41%;
    left: 46%;
  }
`;

function Slideshow({ housingPictures }) {
  const [index, setIndex] = useState(0);

  if (!Array.isArray(housingPictures) || housingPictures.length <= 0) {
    return null;
  }

  let currentIndex = null;

  const prevSlide = () => {
    currentIndex = index - 1;
    setIndex(currentIndex < 0 ? housingPictures.length - 1 : currentIndex);
  };

  const nextSlide = () => {
    currentIndex = index + 1;
    setIndex(currentIndex >= housingPictures.length ? 0 : currentIndex);
  };

  function hideTools() {
    if (housingPictures.length === 1) {
      return "none";
    }
  }

  return (
    <SlideshowContainer>
      <LeftArrowImg
        style={{ display: hideTools() }}
        src={LeftArrow}
        alt="Left Arrow"
        onClick={prevSlide}
      />
      <RightArrowImg
        style={{ display: hideTools() }}
        src={RightArrow}
        alt="Right Arrow"
        onClick={nextSlide}
      />
      <SlideShowImg src={housingPictures[index]} alt="Housing" />
      <NumberText style={{ display: hideTools() }}>
        {index + 1} / {housingPictures.length}
      </NumberText>
    </SlideshowContainer>
  );
}

export default Slideshow;
