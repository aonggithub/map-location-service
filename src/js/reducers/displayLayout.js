const displayLayout = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_CATEGORY_MENU':
      return Object.assign({}, state, action.payload);
    case 'DISPLAY_POI_PANEL':
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

export default displayLayout
