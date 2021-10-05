import React from 'react';
import Drink from "./drink.js";
import Directions from "./directions.js";
import Image from "./image.js";

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=daiquiri";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: []
    };
  }

  //Asynchronous method called after page has first rendered
  async componentDidMount() {
    let response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      let json = await response.json();
      let drinks = json.drinks;
      this.setState({drinks: drinks});
      console.log(this.state.drinks);
    } else {
      console.log(response.status, response.statusText);
    }
  }

  render() {
    return (<div>
      <Drink drinks={this.state.drinks} />
      <Directions drinks={this.state.drinks} />
      <Image drinks={this.state.drinks} />
      </div>)
  }
}

export default App;
