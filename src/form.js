import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

const BasicSelect = function ({ setUrlIndex }) {
  const handleChange = (event) => {
    setUrlIndex(event.target.value);
  };

  // labelId="demo-simple-select-label"
  // id="name"

  return (
    <FormControl fullWidth>
      <InputLabel>Select Drink</InputLabel>
      <Select value={0} label="side" onChange={handleChange}>
        <MenuItem value={1}>Margarita</MenuItem>
        <MenuItem value={2}>Daiquiri</MenuItem>
        <MenuItem value={3}>Negroni</MenuItem>
        <MenuItem value={4}>Martini</MenuItem>
        <MenuItem value={5}>Mojito</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
