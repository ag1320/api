const Ingredients = ({drink}) => {
  let i = 1;
  let drinkMeasure = "strMeasure" + i.toString();
  let drinkIngredient = "strIngredient" + i.toString();
  let listIngredients = [];

  while (drink[drinkMeasure]) {
    listIngredients[i-1] = (<li>{drink[drinkMeasure]} {drink[drinkIngredient]}</li>)
    i++;
    drinkMeasure = "strMeasure" + i.toString();
    drinkIngredient = "strIngredient" + i.toString();
  }
  console.log("Ingredients:", listIngredients);
  return <span>{listIngredients}</span>;
};

export default Ingredients;
