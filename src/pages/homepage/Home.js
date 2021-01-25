import './Home.styles.css';
import starWarsLogo from '../../assets/star-wars-logo.png';
import lightsaber from '../../assets/lightsaber.png';

import CharactersSectionTitle from '../../components/characters-section-title/characters-section-title';
import VehiclesSectionTitle from '../../components/vehicles-section-title/vehicles-section-title';
import CharacterCardsColumn from '../../components/character-cards-column/character-cards-column';
import VehicleCardsColumn from '../../components/vehicle-cards-column/vehicle-cards-column';
import ViewMore from '../../components/view-more/view-more';

const Home = () => {
  return(
    <>
    <div className="hero-container">
      <img src={starWarsLogo} alt="star wars logo" className="star-wars-logo" />
      <h1 className="catchphrase">EXPLORE THE GALAXY</h1>
    </div>
    <section className="content-container">
      <div className="content-column">
        <CharactersSectionTitle />
        <CharacterCardsColumn />
        <ViewMore />
      </div>
      <img src={lightsaber} alt="lightsaber" className="lightsaber"/>
      <div className="content-column">
        <VehiclesSectionTitle />
        <VehicleCardsColumn />
        <ViewMore />
      </div>
    </section>
    </>
  )
}

export default Home;