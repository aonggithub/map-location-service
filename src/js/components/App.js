import React from 'react'
import MapContainer from '../containers/MapContainer'
import POIContainer from '../containers/POIContainer'

const App = () => (
  <div>
    <div style={{textAlign: 'center'}}>Google map</div>
    <MapContainer />
    <POIContainer />
  </div>
)

export default App
