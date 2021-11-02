import React, { useState, useContext } from "react";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import Context from "../Context/Context";

const SearchForm = () => {
  const { requestSearch } = useContext(Context)
  const [searchProperts, setSearchProperts] = useState({
    web: "",
    category: "",
  })
  const [searchTerm, setSearchTerm] = useState("")

  const handleWeb = ({ target: { name, value } }) => {
    setSearchProperts({
      ...searchProperts,
      [`${name}`]: value,
    })
  }

  const handleSearchTerm = ({ target: { value }}) => setSearchTerm(value)

  const handleSearch = () => {
    requestSearch({
      site: searchProperts.web,
      category: searchProperts.category,
      term: searchTerm,
    })
  }

  return(
    <Box sx={{ '.MuiOutlinedInput-root': { m: 1, width: '20ch' }, }}>
      <Select
        value={ searchProperts.web }
        label="Web"
        name="web"
        onChange={ handleWeb }
        displayEmpty
        sx={{ color: "#fff", backgroundColor: "#263456" }}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Todos</em>
        </MenuItem>
        <MenuItem value={"mercado-livre"}>Mercado Livre</MenuItem>
        <MenuItem value={"buscape"}>Buscapé</MenuItem>
      </Select>
      <Select
        value={ searchProperts.category }
        name="category"
        label="Category"
        onChange={ handleWeb }
        sx={{ color: "#fff", backgroundColor: "#263456" }}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          Categorías
        </MenuItem>
        <MenuItem value={"geladeira"}>Geladeira</MenuItem>
        <MenuItem value={"tv"}>TV</MenuItem>
        <MenuItem value={"celular"}>Celular</MenuItem>
      </Select>
      <TextField 
        placeholder="Digite sua busca..."
        onInput={ handleSearchTerm }
      />
      <Button variant="contained" color="primary" onClick={ handleSearch }>
        Search
      </Button>
    </Box>
  )
}

export default SearchForm;