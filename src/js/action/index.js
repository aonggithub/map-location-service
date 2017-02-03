import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

var ClientConfig = require("ClientConfig");

export const addServiceLoc = (text) => {
  return {
    type: 'ADD_SERVICE_LOC',
    text
  }
}

export const changePOILocation = (poiObj) => {
  return {
      type: 'CHANGE_POI_LOC',
      payload: poiObj
  }
}

export const getServiceLoc = () => {
  return function(dispatch){
    // Setting fixed data

    if(ClientConfig.env == 'prod'){
      let serviceLocations =
        [
           {
              _id: "5860928f360fbe6728fd2e54",
              name:'A',
              title: 'RSU Tower',
              lat:'13.733313',
              lng:'100.566274',
              rated:5
           },
           {
             _id: "5860928f360fbe6728fd2e55",
              name:'B',
              title: 'Samitivej Sukhumvit Hospital',
              lat:'13.736627208213747',
              lng:'100.57329065878298',
              rated:5
           },
           {
             _id: "5860928f360fbe6728fd2e56",
              name:'C',
              title: 'Benjakitti Park',
              lat:'13.731270257133573',
              lng:'100.5572832353821',
              rated:5
           }
        ];

      dispatch({
        type: 'GET_SERVICE_LOC',
        payload: serviceLocations
      });
    }
    // Ending Setting fixed data



    if(ClientConfig.env == 'dev'){
      // Get data from Server
      axios.get(`${API_URL}/getServiceLocation`)
      .then(response =>{
        let data = response.data.data;

        dispatch({
          type: 'GET_SERVICE_LOC',
          payload: data
        });
      })
    }
    // Ending getting data from Server
  }
}
