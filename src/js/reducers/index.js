import { combineReducers } from 'redux'
import locations from './locations'
import poiLocation from './poiLocation'

const mapApp = combineReducers({
  locations,
  poiLocation
})

export default mapApp
