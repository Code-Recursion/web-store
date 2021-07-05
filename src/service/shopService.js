import axios from 'axios'
const baseURL = 'https://60deefccabbdd9001722d12d.mockapi.io/shop/products'

const getAllProduct = () => {
  const res = axios.get(baseURL).then((res) => res.data)
  return res
}

const addProduct = (contactObj) => {
  const res = axios.post(baseURL, contactObj)
  return res.then((res) => res.data)
}

const deleteProduct = (id) => {
  const res = axios.delete(`${baseURL}/${id}`)
  return res.then((response) => response.data)
}

const updateProduct = (id, updatedData) => {
  const res = axios.put(`${baseURL}/${id}`, updatedData)
  return res.then((response) => response.data)
}

const shopSevice = {
  getAllProduct,
  addProduct,
  deleteProduct,
  updateProduct,
}

export default shopSevice
