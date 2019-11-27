import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [ ],
      searchField: '',
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then( response => response.json())
      .then( json => this.setState({monsters:json}));
    
  }

  handleChange = e => this.setState({searchField:e.target.value})

  render() {

    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    })

    return (
        <div className='App'>
          <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters'
          handleChange = {this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}/>
      </div>
      
      )
  }
}

export default App;
