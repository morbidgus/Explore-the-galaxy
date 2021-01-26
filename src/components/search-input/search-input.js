import './search-input.styles.css';

const SearchInput = ({ handleChange }) => (
  <form className="input-container">
    <input 
      className="input-field" 
      type="search" 
      placeholder="Search character" 
      onChange={handleChange}
      spellcheck="false" 
      required 
    />
  </form>
)

export default SearchInput;