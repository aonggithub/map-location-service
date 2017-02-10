import { combineReducers } from 'redux'
import locations from './locations'
import poiLocation from './poiLocation'
import displayLayout from './displayLayout'

const mapApp = combineReducers({
  locations,
  poiLocation,
  displayLayout
})

export default mapApp
