import axios from "axios";

// product
export const svGetProductall = () => {
  return axios.get('/productall').then((res) => res).catch((err) => err)
}

export const svAddProdcut = (params) => {
  return axios.post('/add-product', params).then((res) => res).catch((err) => err)
}


// cate
export const svGetCateAll = () => {
  return axios.get('/productcate').then((res) => res).catch((err) => err)
}