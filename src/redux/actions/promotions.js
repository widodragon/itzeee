import axios from "axios";
export const getData = () => {
  return {
    type: 'GET_DATA',
    payload: axios.get(`https://1fe65121-d268-4aa5-8abe-1593670520df.mock.pstmn.io/api/home`)
  }
}
export const getReward = () => {
  return {
    type: 'GET_REWARD',
    payload: axios.get(`https://5d3da01d139f4200145322d2.mockapi.io/api/v1/menus`)
  }
}
export const getMenu = () => {
  return {
    type: 'GET_MENU',
    payload: axios.get(`https://5d3da01d139f4200145322d2.mockapi.io/api/v1/menus`)
  }
}
export const getHistory = () => {
  return {
    type: 'GET_HISTORY',
    payload: axios.get(`https://5d3da01d139f4200145322d2.mockapi.io/api/v1/history`)
  }
}
export const addCart=(data)=>{
  return{
    type: 'ADD_CART',
    res: data
  }
}
export const updateCart=(data)=>{
  return{
    type: 'UPDATE_CART',
    res: data
  }
}


