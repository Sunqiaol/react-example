/*==================================================
SearchComponent.js
It performs search for Pokémon using API: https://pokeapi.co/

Functionalities:
- Use axios to send asynchronous HTTP requests to RESTful endpoints (APIs)

Practice:
- Get "base_experience" value from response and display it in the same table as "height" and "weight"
================================================== */
import { Component } from 'react';
import axios from 'axios';  // Library used to send asynchronous HTTP requests to RESTful endpoints (APIs)

// This file searches Pokémon using API: https://pokeapi.co/

class SearchComponent extends Component {
  constructor(props){  // Store received data in state's "apiData" object
    super(props);
    this.state = {  // Initialize state
      apiData: {
        id: -1,
        height: -1,
        weight: -1,
        abilities: [],
        name: ""
      },
      searchText: "",
      found: false
    }
  }

  // Update value of searchText value when search input is changed
  handleInputChange = (event) => {
    this.setState({searchText: event.target.value});
  }

  // Perform search when search button is clicked
  handleSearchClick = async () => {  // Await for promise (completion) returned from API call
    let pokemonName = this.state.searchText;  // Search input
    let linkToAPI = 'https://pokeapi.co/api/v2/pokemon/'+pokemonName;
                    //'https://pokeapi.co/api/v2/pokemon/ditto';

    // Send request if search input is not empty
    if (pokemonName.trim() !== '') {
      try {  // Accept success response as array of JSON objects (apiData)
        let response = await axios.get(linkToAPI);
        console.log(response);  // Print out response
        // To get data object in the response, need to use "response.data"
        this.setState({apiData: response.data, found: true});  // Store received data in state's "apiData" object
      } 
      catch (error) {  // Print out errors at console when there is an error response
        if (error.response) {        
          // The request was made, and the server responded with error message and status code.
          console.log(error.response);  // Print out error response
          console.log(error.response.data); // Print out error message (e.g., Not Found)
          console.log(error.response.status); // Print out error status code (e.g., 404)
          this.setState({found: false});
        }    
      }
    }
  }

  // Create a table to display "height" and "weight" values
  makeTable = () => {  // Extract "height" and "weight" properties of each apiData JSON array element
    let currData = this.state.apiData;
    let table = [];
    table.push(
      <tr key={currData.id}>
        <td>Height: {currData.height}</td>
        <td>Weight: {currData.weight}</td>
      </tr>
    );
    return table;
  }
  
  // Create a list to display "abilities" values
  makeList = () => {  // Extract "abilities" properties of each apiData JSON array element
    let abilities = this.state.apiData.abilities;
    let list = abilities.map( (item, index) => {
      return (
          <li key={index}>{item.ability.name}</li>
      );
    });
    return list;
  }

  render() {  // Parse each element in the apiData JSON array returned from API call
    return (
      <div className="container">
        <div className="search">
          <h2>Search Pokémon:</h2>
          <h3>(e.g., pikachu, charmander, ditto)</h3>
          <input type="text" value={this.state.searchText} onChange={this.handleInputChange} placeholder="Enter Pokémon name"/>
          <button onClick={this.handleSearchClick}>Search</button>
        </div>
        { this.state.found  // Conditional rendering
          ? <div>
              <h1>{this.state.apiData.name}</h1>
              <table id="data">
                <tbody>
                {this.makeTable()}
                </tbody>
              </table>
              <p>Abilities:</p>
              <ul>{this.makeList()}</ul>
            </div> 
          : <h4>No results</h4>
        }
      </div>
    );
  }
}

export default SearchComponent;