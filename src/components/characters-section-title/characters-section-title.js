import './characters-section-title.styles.css';
import characters from '../../assets/characters.png';

const CharactersSectionTitle = () => {
  return(
    <div className="title-container">
      <img src={characters} alt="characters" className="title-image" />
      <span className="category-title">CHARACTERS</span>
    </div>
  )

}

export default CharactersSectionTitle;