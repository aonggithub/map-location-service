const locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SERVICE_LOC':
      return [
        ...state,
        action.payload
      ]
    case 'GET_SERVICE_LOC':
      return action.payload
    default:
      return state
  }
}

export default locations
