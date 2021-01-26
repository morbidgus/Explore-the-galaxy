import React from 'react';
import axios from 'axios';
import './Characters-page.styles.css';
import CharactersSectionTitle from '../../components/characters-section-title/characters-section-title';
import SearchInput from '../../components/search-input/search-input';
import CardGrid from '../../components/card-grid/card-grid';

class CharactersPage extends React.Component{
  constructor(){
    super()

    this.state = {
      characters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    axios.get(`https://swapi.py4e.com/api/people/`).then(res => {
        this.setState({characters: res.data.results})
      })
  }

  handleChange = e =>{
    this.setState({searchField: e.target.value})
  }

  render(){
    const {characters, searchField} = this.state; 
    const filteredCharacters = characters.filter(character => 
      character.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="main-container">
        <CharactersSectionTitle />
        <SearchInput handleChange={this.handleChange} />
        <CardGrid characters={filteredCharacters}/>
      </div>
    )
  }
}

export default CharactersPage;