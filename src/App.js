import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        Email: "1",
        AadId: "1",
        RequestType: "Request",
        AdditionalData: "GetAllAnimals"
      })
    };
    fetch('http://localhost:1379/', requestOptions)
      .then(response => response.json())
      .then((users) =>
        this.setState(() => {
          return { animals: users };
        }
        )
      );
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return {
        searchField: event.target.value.toLocaleLowerCase()
      }
    });
  }

  render() {
    console.log(this.state.animals);
    const { animals, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredAnimals = animals.filter((animal) => {
      return animal.Name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>VetClinic</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search animals'
          className='animals-search-box' />
        <CardList animals={filteredAnimals} />
      </div>
    );
  }
}

export default App;
