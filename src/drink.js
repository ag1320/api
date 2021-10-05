import Tooltip from '@material-ui/core/Tooltip'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from "@material-ui/core/Grid"

const Drink = ({drinks}) => {
  let listDrinks = drinks.map((drink, index) =>
  <Tooltip title = 'test'>
    <Grid item xs = {12} sm = {6} md = {4} lg = {3}>
      <Card variant = 'outlined'>
        <CardMedia 
          component="img" 
          height="100" 
          image={drink.strDrinkThumb} 
          alt="drink" />
        <li key = 'index'>{drink.strDrink}- Serve in a {drink.strGlass}
          <ul>
            <li>{drink.strMeasure1} {drink.strIngredient1}</li>
            <li>{drink.strMeasure2} {drink.strIngredient2}</li>
            <li>{drink.strMeasure3} {drink.strIngredient3}</li>
          </ul>
        </li>
      </Card>
    </Grid>
  </Tooltip>)
  return (
  <Grid container spacing = {4}>
    <ul>{listDrinks}
    </ul>
  </Grid>
  )
}

export default Drink;
