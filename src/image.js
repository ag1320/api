const Image = ({drinks}) => {
  let listDrinks = drinks.map((drink, index) =>
  // <li key ="index"><img src="{drink.strDrinkThumb}" width="150" height="150" /></li>)
  <li key ="index">{drink.strDrinkThumb}</li>)
  return (<ul>{listDrinks}</ul>)
  }
  
  export default Image;