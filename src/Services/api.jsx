import axios from "axios"

export const fetchMl = (searchTerm) => {
  return axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm}`)
    .then(resp => resp)
    .catch(err => console.log(err))
}

export const fetchBuscape = () => {
  console.log("buscape")
}

export const fetchAll = () => {
  console.log("busca em todos")
}