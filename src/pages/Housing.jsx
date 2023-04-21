import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import RedStar from "../assets/red_star.png";
import GreyStar from "../assets/grey_star.png";

const HousingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const HousingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const HostAndRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }
`;

const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 76px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const TitleContainer = styled.div`
  color: #ff6060;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const HostContainer = styled.div`
  color: #ff6060;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  text-align: right;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    width: 30%;
    justify-content: end;
    margin-bottom: 0px;
  }
`;

const HostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TagStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: 25px;
  background-color: #ff6060;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  padding: 3px 40px;
  margin-right: 10px;

  @media (max-width: 768px) {
    padding: 0px 4px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: auto;
  height: 25px;
  margin-bottom: 5px;
`;

const RatingImg = styled.img`
  width: 24px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 20px;
  }
`;

function Housing() {
  const [housing, setHousing] = useState(null);
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((result) => result.json())
      .then((housings) => {
        const housingData = housings.find((housing) => housing.id === id.id);
        setHousing(housingData);
        if (!housingData) {
          navigate("/*");
        }
      })
      .catch((error) => console.log(error));
  }, [id.id, navigate]);

  if (!housing) {
    return;
  }

  const picture = housing.pictures;
  const title = housing.title;
  const location = housing.location;
  const hostName = housing.host.name;
  const hostPicture = housing.host.picture;
  const tags = housing.tags;
  const rating = Number(housing.rating);
  const description = housing.description;
  const equipments = housing.equipments;

  let ratingArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingArray.push(<RatingImg src={RedStar} alt="star" />);
    } else {
      ratingArray.push(<RatingImg src={GreyStar} alt="star" />);
    }
  }

  return (
    <HousingContainer>
      <Slideshow housingPictures={picture} />
      <HousingInfo>
        <div>
          <TitleContainer>
            <h1>{title}</h1>
            <h3>{location}</h3>
          </TitleContainer>
          <TagContainer>
            {tags.map((tag) => (
              <TagStyle key={tag} tag={tag}>
                <h4>{tag}</h4>
              </TagStyle>
            ))}
          </TagContainer>
        </div>
        <HostAndRating>
          <HostContainer>
            <h3>{hostName}</h3>
            <HostPicture src={hostPicture} alt="host" />
          </HostContainer>
          <RatingContainer>{ratingArray}</RatingContainer>
        </HostAndRating>
      </HousingInfo>
      <ThirdRow>
        <Collapse title={"Description"} content={description} />
        <Collapse
          title={"Equipements"}
          content={equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </ThirdRow>
    </HousingContainer>
  );
}

export default Housing;
