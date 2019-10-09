import axios from "axios";
import {path_url} from '../../helpers/Variables';
export const getLogin = (body) => {
  return {
    type: 'GET_LOGIN',
    payload: axios.post(`${path_url("recruitment-api/authenticate")}`,body)
  }
}
export const getProfile = () => {
  return {
    type: 'GET_PROFILE',
    payload: axios.get(`https://5d3da01d139f4200145322d2.mockapi.io/api/v1/profile`)
  }
}