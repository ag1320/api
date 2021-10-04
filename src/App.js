import React from 'react';

//import outside files 
//import logo from './logo.svg';
import './App.css';
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

class App extends React.Component {
  constructor (){
    super();
    // add state variables- if necessary
    this.state = {

    };
  }
  
  async componentDidMount(){
    let response = await fetch (url);
    if (response.status >= 200 && response.status <= 299){
      let json = await response.json();
      let drinks = json.drinks;
      console.log(drinks);
      //set state
    } else {
      console.log(response.status, response.statusText)
    }
  }

  render(){
    return (
    <div className="App">
    </div>
    );
  }
}

export default App;
