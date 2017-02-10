const displayLayout = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_CATEGORY_MENU':
      return action.payload
    default:
      return state
  }
}

export default displayLayout
