import React from 'react'
import MapContainer from '../containers/MapContainer'
import POIContainer from '../containers/POIContainer'
import TestModal from '../testComponent/TestModal'

const App = () => (
  <div>
    <div style={{textAlign: 'center'}}>Google map</div>
    <MapContainer />
    <POIContainer />
  </div>
)

export default App
