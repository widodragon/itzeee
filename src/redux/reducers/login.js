const initialState = {
  isLoading: false,
  login:{},
  profile:{}
}
export default contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_LOGIN_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_LOGIN_FULFILLED':
    return {
      ...state,
      isLoading: false,
      login: action.payload.data
    }

    case 'GET_PROFILE_PENDING':
    return {
      ...state,
      isLoading: true
    }

    case 'GET_PROFILE_REJECTED':
    return {
      ...state,
      isLoading: false
    }

    case 'GET_PROFILE_FULFILLED':
    return {
      ...state,
      isLoading: false,
      profile: {...action.payload.data}
    }

    default:
    return state;
  }
}
