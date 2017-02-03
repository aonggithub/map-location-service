const poiLocation = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_POI_LOC':
      return action.payload
    default:
      return state
  }
}

export default poiLocation
