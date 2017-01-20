const locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        {
          text: action.text
        }
      ]
    case 'GET_LOCATIONS':
      return state
    default:
      return state
  }
}

export default locations
