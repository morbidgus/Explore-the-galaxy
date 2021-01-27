import React from 'react';
import './Characters-page.styles.css';
import CharactersSectionTitle from '../../components/characters-section-title/characters-section-title';
import SearchInput from '../../components/search-input/search-input';
import CardGrid from '../../components/card-grid/card-grid';
import Pagination from '../../components/pagination/pagination';


class CharactersPage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      searchField: '',
      currentPage: 1,
      elementsPerPage: 20
    }
  }



  handleChange = e =>{
    this.setState({searchField: e.target.value})
  }

  

  render(){
    const {characters} = this.props;
    const {searchField, currentPage, elementsPerPage} = this.state; 
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