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
      drinks: [],
      url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'
    };
    this.setUrl = this.setUrl.bind(this)
  }

  setUrl(url){
    this.setState({url})
  }

  //Asynchronous method called after page has first rendered
  async componentDidMount() {
    let response = await fetch(this.state.url);
    if (response.status >= 200 && response.status <= 299) {
      let json = await response.json();
      let drinks = json.drinks;
      this.setState({drinks: drinks});

      //remove next line before complete
      console.log(this.state.drinks);
      
    } else {
      console.log(response.status, response.statusText);
    }
  }

  render() {
    console.log(this.state.url)
    return (<div>
      <BasicSelect url={this.state.url} setUrlMethod={this.setUrl}/>
      <DrinkList drinks={this.state.drinks} />
    </div>)
  }
}

export default App;
