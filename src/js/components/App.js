import React from 'react'
import MapContainer from '../containers/MapContainer'
import POIContainer from '../containers/POIContainer'
import AppBarMap from './AppBarMap'
import LoginGoogleButton from './LoginGoogleButton'

const App = () => (
  <div>
    <AppBarMap />
    <MapContainer />
    <POIContainer />
  </div>
)

export default App
