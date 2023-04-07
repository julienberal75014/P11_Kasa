import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import styled from "styled-components";
import AboutImage from "../assets/about_banner.png";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

function About() {
  function ResponsiveImg() {
    if (window.innerWidth < 768) {
      return "auto;";
    } else {
      return "height: 223px;";
    }
  }
  return (
    <AboutContainer>
      <Banner title="" image={AboutImage} style={{ height: ResponsiveImg() }} />
      <Collapse
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      ></Collapse>
      <Collapse
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      ></Collapse>
      <Collapse
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      ></Collapse>
      <Collapse
        title="Securité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      ></Collapse>
    </AboutContainer>
  );
}

export default About;
