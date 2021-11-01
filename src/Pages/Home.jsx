import { Button, FormControl, TextField } from "@material-ui/core";
import React from "react";

const Home = () => {
  return(
    <div>
      <h1>Busca</h1>
      <FormControl>
        <TextField 
          placeholder="Digite sua busca..."
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </FormControl>
    </div>
  )
}

export default Home;
