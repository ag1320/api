import Tooltip from '@material-ui/core/Tooltip'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from "@material-ui/core/Grid"

const Drink = ({drinks}) => {
  let listDrinks = drinks.map((drink, index) =>
  <Tooltip title = 'test'>
    <Grid
      <Card sx={{ maxWidth: 100 }} variant = 'outlined'>
        <CardMedia 
          component="img" 
          height="100" 
          image={drink.strDrinkThumb} 
          alt="drink" />
        <li key = 'index'>{drink.strDrink}- Serve in a {drink.strGlass}
          <ol>
            <li>{drink.strIngredient1}</li>
            <li>{drink.strIngredient2}</li>
            <li>{drink.strIngredient3}</li>
          </ol>
        </li>
      </Card>
  </Tooltip>)
  return (
  <Grid container>
    <ul>{listDrinks}
    </ul>
  </Grid>
  )
}

export default Drink;
