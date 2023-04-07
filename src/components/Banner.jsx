import styled from "styled-components";
import HomeImage from "../assets/home_banner.png";
import PropTypes from "prop-types";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 43px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 223px;
  border-radius: 25px;
  object-fit: cover;
  filter: brightness(70%);

  @media (max-width: 768px) {
    border-radius: 10px;
    height: 111px;
  }
`;

const BannerTitle = styled.p`
  color: #ffffff;
  font-size: 48px;
  position: absolute;
  left: 25.9%;
  right: 25.14%;
  top: 21.32%;
  bottom: 69.04%;

  @media (max-width: 890px) and (min-width: 769px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    position: absolute;
    inset: 9.32% 7.14% 43.04% 15.9%;
  }
`;

function Banner({ title, image }) {
  return (
    <BannerContainer>
      <BannerImg src={image} alt="Banner" />
      <BannerTitle>{title}</BannerTitle>
    </BannerContainer>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  title: "Chez vous, partout et ailleurs",
  image: HomeImage,
};

export default Banner;
