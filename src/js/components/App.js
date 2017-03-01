import React from 'react'
import MapContainer from '../containers/MapContainer'
import POIContainer from '../containers/POIContainer'
import AppBarMap from './AppBarMap'

const App = () => (
  <div>
    <AppBarMap />
    <MapContainer />
    <POIContainer />
  </div>
)

export default App
