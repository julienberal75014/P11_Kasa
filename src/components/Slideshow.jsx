import { useState } from "react";
import styled from "styled-components";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";

const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  top: 40%;
  transform: translate(0; -50%);
  left: 16px;
  zindex: 1;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 24px;
    top: 45%;
  }

  @media (min-width: 350px) and (max-height: 850px) {
    top: 46%;
  }
`;

const RightArrowImg = styled.img`
  width: 47px;
  position: absolute;
  top: 40%;
  transform: translate(0; -50%);
  right: 16px;
  zindex: 1;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 24px;
    top: 45%;
  }

  @media (min-width: 350px) and (max-height: 850px) {
    top: 46%;
  }
`;

const NumberText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  bottom: 2%;
  right: 50%;
  left: 50%;
  width: max-content;

  @media (min-width: 350px) and (max-height: 850px) {
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
