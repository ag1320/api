import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import React from 'react'

const BasicSelect = function ({url, setUrlMethod}) {

const handleChange = (event) => {
    setUrlMethod(event.target.value);
  };


  // labelId="demo-simple-select-label"
  // id="name"

   return (<FormControl fullWidth>
        <InputLabel>Select Drink</InputLabel>
        <Select
        value={url}
        label="side"
        onChange={handleChange}
        >
        <MenuItem value={"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"}>Margarita</MenuItem>
        </Select>
    </FormControl>)
}

export default BasicSelect;
