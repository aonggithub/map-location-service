import { combineReducers } from 'redux'
import locations from './locations'
import poiLocation from './poiLocation'
import displayLayout from './displayLayout'
import categories from './categories'

const mapApp = combineReducers({
  locations,
  poiLocation,
  displayLayout,
  categories
})

export default mapApp
