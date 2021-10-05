const Directions = ({drinks}) => {
  let listDrinks = drinks.map((drink, index) =>
  <li key ="index">{drink.strInstructions}</li>)
  return (<ul>{listDrinks}</ul>)
}

export default Directions;