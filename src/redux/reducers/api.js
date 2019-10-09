const initialState = {
  data: [],
  isLoading: false,
  data:[],
  cart:[],
  reward:[],
  menu:[],
  history:[]
}
export default api = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_DATA_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_DATA_FULFILLED':
    return {
      ...state,
      isLoading: false,
      promotion: action.payload.data
    }

    case 'GET_REWARD_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_REWARD_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_REWARD_FULFILLED':
    return {
      ...state,
      isLoading: false,
      reward: action.payload.data
    }

    case 'GET_MENU_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_MENU_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_MENU_FULFILLED':
    return {
      ...state,
      isLoading: false,
      menu: action.payload.data
    }

    case 'GET_HISTORY_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_HISTORY_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_HISTORY_FULFILLED':
    return {
      ...state,
      isLoading: false,
      history: action.payload.data
    }    
    case 'ADD_CART':
    let temp=[];
    let data=initialState.cart.concat(action.res)
    return {
      ...state,
      isLoading: false,
      cart: [...state.cart, ...data]
    }
    case 'UPDATE_CART':
    return {
      ...state,
      isLoading: false,
      cart: action.res
    }
    default:
    return state;
  }
}
