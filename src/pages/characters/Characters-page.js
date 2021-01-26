import React from 'react';
import axios from 'axios';
import './Characters-page.styles.css';
import CharactersSectionTitle from '../../components/characters-section-title/characters-section-title';
import SearchInput from '../../components/search-input/search-input';
import CardGrid from '../../components/card-grid/card-grid';
import Pagination from '../../components/pagination/pagination';

class CharactersPage extends React.Component{
  constructor(){
    super()

    this.state = {
      characters: [],
      searchField: '',
      currentPage: 1,
      elementsPerPage: 20
    }
  }

  componentDidMount(){
    function getAllStarwarsCharacters() {
      let characters = [];

      return axios("https://swapi.py4e.com/api/people/")
        .then(response => {
          characters = response.data.results;
          return response.data.count;
        })
        .then(count => {
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          let promises = [];

          for (let i = 2; i <= numberOfPagesLeft; i++) {
            promises.push(axios(`https://swapi.py4e.com/api/people?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then(response => {
          characters = response.reduce((acc, data) => [...acc, ...data.data.results], characters);
          return characters;
        })
        .catch(error => console.log("Something wrong. Please refresh the page and try again."));
    }
  
  (async () => {
      const starwarsCharacters = await getAllStarwarsCharacters();
      this.setState({characters: starwarsCharacters});
  })();


  }

  handleChange = e =>{
    this.setState({searchField: e.target.value})
  }

  

  render(){
    const {characters, searchField, currentPage, elementsPerPage} = this.state; 
    const filteredCharacters = characters.filter(character => 
      character.name.toLowerCase().includes(searchField.toLowerCase())
      )

    const paginate = (number) => this.setState({currentPage: number});

    return(
      <div className="main-container">
        <CharactersSectionTitle />
        <SearchInput handleChange={this.handleChange} />
        <CardGrid characters={filteredCharacters} 
          currentPage={currentPage} 
          elementsPerPage={elementsPerPage} 
        />
        <Pagination 
          elementsPerPage={elementsPerPage} 
          TotalElements={characters.length}
          paginate={paginate}
        />
      </div>
    )
  }
}

export default CharactersPage;