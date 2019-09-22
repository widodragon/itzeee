import axios from "axios";
export const getLogin = (body) => {
  return {
    type: 'GET_LOGIN',
    payload: axios.post(`https://devel-7.tonjoostudio.com/recruitment-api/authenticate`,body)
  }
}
export const getProfile = () => {
  return {
    type: 'GET_PROFILE',
    payload: axios.get(`https://5d3da01d139f4200145322d2.mockapi.io/api/v1/profile`)
  }
}