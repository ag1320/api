import Tooltip from '@material-ui/core/Tooltip'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from "@material-ui/core/Grid"
import Form from './form.js'
import Directions from './directions.js'
import { CardContent } from '@material-ui/core'
import './drink.css'

const DrinkList = ({ drinks }) => {
  let listDrinks = drinks.map((drink, index) =>
    <Tooltip title={drink.strDrink}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant='outlined' className = 'card'>
          <CardContent style = {{backgroundColor: "lightgrey"}}>
            <CardMedia
              component="img"
              image={drink.strDrinkThumb}
              alt="drink" />
            <h5 key='index'>{drink.strDrink}- Serve in a {drink.strGlass}
              <ul>
                <li>{drink.strMeasure1} {drink.strIngredient1}</li>
                <li>{drink.strMeasure2} {drink.strIngredient2}</li>
                <li>{drink.strMeasure3} {drink.strIngredient3}</li>
              </ul>
              <Directions drink={drink} />
            </h5>
          </CardContent>
        </Card>
      </Grid>
    </Tooltip>
  )
  return (
    <Grid container spacing = {4}>
        {listDrinks}
    </Grid>
  )
}

export default DrinkList;

