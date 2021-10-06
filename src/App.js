import React from "react";
import DrinkList from "./drink.js";
import BasicSelect from "./form.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: [
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=daiquiri",
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni",
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini",
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito",
      ],
      drinkTypes: [[]],
      urlIndex: 0,
      isUrlLoaded: false,
    };
    this.setUrlIndex = this.setUrlIndex.bind(this);
  }

  setUrlIndex(urlIndex) {
    this.setState({ urlIndex });
  }

  async componentDidMount() {
    for (let i = 0; i < this.state.url.length; i++) {
      let response = await fetch(this.state.url[i]);
      if (response.status >= 200 && response.status <= 299) {
        let json = await response.json();
        this.setState({ drinkTypes: [...this.state.drinkTypes, json.drinks] });
      } else {
        console.log(response.status, response.statusText);
      }
    }
  }

  render() {
    return (
      <div>
        <BasicSelect setUrlIndex={this.setUrlIndex} />
        <DrinkList drinks={this.state.drinkTypes[this.state.urlIndex]} />
      </div>
    );
  }
}

export default App;
