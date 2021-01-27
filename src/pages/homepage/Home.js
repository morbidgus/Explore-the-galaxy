import './Home.styles.css';
import { Link } from 'react-router-dom';
import starWarsLogo from '../../assets/star-wars-logo.png';
import lightsaber from '../../assets/lightsaber.png';
import AnimatedCharacter from '../../components/animated-character/animated-character';
import CharactersSectionTitle from '../../components/characters-section-title/characters-section-title';
import VehiclesSectionTitle from '../../components/vehicles-section-title/vehicles-section-title';
import CharacterCardsColumn from '../../components/character-cards-column/character-cards-column';
import VehicleCardsColumn from '../../components/vehicle-cards-column/vehicle-cards-column';
import ViewMore from '../../components/view-more/view-more';

const Home = ({characters, vehicles}) => {
  return(
    <>
    <div className="hero-container">
      <img src={starWarsLogo} alt="star wars logo" className="star-wars-logo" />
      <h1 className="catchphrase">EXPLORE THE GALAXY</h1>
      <AnimatedCharacter />
    </div>
    <section className="content-container">
      <div className="content-column">
        <Link to='/characters' className="route">
          <CharactersSectionTitle />
        </Link>
        <CharacterCardsColumn characters={characters}/>
        <Link to='/characters' className="route">
          <ViewMore />
        </Link>
      </div>
      <img src={lightsaber} alt="lightsaber" className="lightsaber"/>
      <div className="content-column">
        <Link to='/vehicles' className="route">
          <VehiclesSectionTitle />
        </Link>
        <VehicleCardsColumn vehicles={vehicles}/>
        <Link to='/vehicles' className="route">
          <ViewMore />
        </Link>
      </div>
    </section>
    </>
  )
}

export default Home;