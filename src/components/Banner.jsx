import styled from "styled-components";
import BannerImage from "../assets/home_banner.png";
import PropTypes from "prop-types";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 43px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 223px;
  border-radius: 25px;
  object-fit: cover;
  filter: brightness(70%);
`;

const BannerTitle = styled.p`
  color: #ffffff;
  font-size: 48px;
  position: absolute;
  left: 25.9%;
  right: 25.14%;
  top: 21.32%;
  bottom: 69.04%;
`;

function Banner({ title }) {
  return (
    <BannerContainer>
      <BannerImg src={BannerImage} alt="Banner" />
      <BannerTitle>{title}</BannerTitle>
    </BannerContainer>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
};

Banner.defaultProps = {
  title: "Chez vous, partout et ailleurs",
};

export default Banner;
