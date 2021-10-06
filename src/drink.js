import "./drink.css";
import Form from "./form.js";
import Directions from "./directions.js";
import Ingredients from "./ingredients.js";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { CardContent } from "@material-ui/core";

const DrinkList = ({drinks}) => {
  let listDrinks = drinks.map((drink, index) => (
    <Tooltip title={drink.strDrink}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant="outlined" className="card">
          <CardContent style={{ backgroundColor: "lightgrey" }}>
            <CardMedia
              component="img"
              image={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            <h5 key="index">
              {drink.strDrink}- Serve in a {drink.strGlass}
              <ul>
                  <Ingredients drink={drink} />
              </ul>
              <Directions drink={drink} />
            </h5>
          </CardContent>
        </Card>
      </Grid>
    </Tooltip>
  ));

  return (<Grid container spacing={4}>{listDrinks}</Grid>);
};

export default DrinkList;
