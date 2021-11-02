import { CodeSharp } from "@material-ui/icons";
import axios from "axios";
import react, { useState } from "react";
import { fetchAll, fetchBuscape, fetchMl } from "../Services/api";
import Context from "./Context";

const Provider = ({ children }) => {
  const [products, setProducts] = useState({});

  const requestSearch = ({ site, category, term }) => {
    switch (site) {
      case "mercado-livre":
        const products = fetchMl(`${category} ${term}`)
          .then(resp => setProducts(resp.data.results))
          .catch(err => console.log(err))
        break
      case "buscape":
        fetchBuscape(`${category} ${term}`)
        break
      default:
        fetchAll(`${category} ${term}`)
    }
  }
  
  const contextValue = {
    requestSearch,
    fetchMl,
    products,
    setProducts
  }

  return(
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

export default Provider;