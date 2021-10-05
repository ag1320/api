import React from 'react';
import DrinkList from "./drink.js";
import BasicSelect from './form.js'

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=daiquiri";
//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni";
//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini";
//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: ["https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=daiquiri",
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni",
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini",
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito"],
      drinkTypes: [],
      urlIndex: 0,
      isUrlLoaded: false
    };
    this.setUrlIndex = this.setUrlIndex.bind(this)
  }

  setUrlIndex(urlIndex){
    this.setState({urlIndex})
  }

  //Asynchronous method called after page has first rendered
  async componentDidMount() {
    for (let i = 0; i < this.state.url.length; i++) {
      let response = await fetch(this.state.url[i]);
      if (response.status >= 200 && response.status <= 299) {
        let json = await response.json();
        //this.setState(drinkTypes: [...this.state.drinkTypes, json.drinks]);
        this.setState({drinkTypes: json.drinks});
        console.log(i)
        console.log(this.state.drinkTypes[i])
      } else {
      console.log(response.status, response.statusText);
      }
    }
  }

  render() {
    let {isUrlLoaded} = this.state;
    return (<div>
      <BasicSelect setUrlIndex={this.setUrlIndex}/>
      <DrinkList drinks={isUrlLoaded ? this.state.drinkTypes[this.state.urlIndex] : {}} />
    </div>)
  }
}

export default App;
