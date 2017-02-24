import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

var ClientConfig = require("ClientConfig");
var ConstantServiceLocations = [
   {
      _id: "5860928f360fbe6728fd2e54",
      name:'A',
      title: 'RSU Tower',
      lat:'13.733313',
      lng:'100.566274',
      rated:5,
      category: 'cat1'
   },
   {
     _id: "5860928f360fbe6728fd2e55",
      name:'B',
      title: 'Samitivej Sukhumvit Hospital',
      lat:'13.736627208213747',
      lng:'100.57329065878298',
      rated:5,
      category: 'cat2'
   },
   {
     _id: "5860928f360fbe6728fd2e56",
      name:'C',
      title: 'Benjakitti Park',
      lat:'13.731270257133573',
      lng:'100.5572832353821',
      rated:5,
      category: 'cat3'
   },
   {
     _id: "5860929f360fbe6728fd2e59",
      name:'D',
      title: 'Ban Kluai Tai Alley',
      lat:'13.721240760977764',
      lng:'100.57965587508545',
      rated:5,
      category: 'cat3'
   }
];

var ConstantCategories = [
    {
       "_id": "58aa9a4da725802928a9f791",
       "id": "1",
       "name": "Home",
       "icon": "home"
    },{
       "_id": "58aa9a4da725802928a9f792",
       "id": "2",
       "name": "Restaurant",
       "icon": "glass"
    },{
       "_id": "58aa9a4da725802928a9f793",
       "id": "3",
       "name": "Pub",
       "icon": "music"
    }
];

export const addServiceLoc = (text) => {
  return {
    type: 'ADD_SERVICE_LOC',
    text
  }
}

export const displayCategoryMenu = (show) => {
  return {
      type: 'DISPLAY_CATEGORY_MENU',
      payload: {'displayCatMenu': show}
  }
}

export const displayPOIPanel = (show) => {
  return {
      type: 'DISPLAY_POI_PANEL',
      payload: {'displayPOIPanel': show}
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
      let serviceLocations = ConstantServiceLocations;

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


export const getCategories = () => {
  return function(dispatch){
    // Setting fixed data

    if(ClientConfig.env == 'prod'){
      let categories = ConstantCategories;

      dispatch({
        type: 'GET_CATEGORIES',
        payload: categories
      });
    }
    // Ending Setting fixed data

    if(ClientConfig.env == 'dev'){
      // Get data from Server
      axios.get(`${API_URL}/getCategories`)
      .then(response =>{
        let data = response.data.data;

        dispatch({
          type: 'GET_CATEGORIES',
          payload: data
        });
      })
    }
    // Ending getting data from Server
  }
}

export const getNearbyServiceLoc = (currentLocation, radius) => {
  return function(dispatch){
    // Setting fixed data

    if(ClientConfig.env == 'prod'){
      let serviceLocations = ConstantServiceLocations;

      dispatch({
        type: 'GET_SERVICE_LOC',
        payload: serviceLocations
      });
    }
    // Ending Setting fixed data


    if(ClientConfig.env == 'dev'){
      // Get data from Server
      axios.get(`${API_URL}/getNearbyServiceLocation`, {
        params: {
          lng: currentLocation.lng,
          lat: currentLocation.lat,
          radius: radius
        }
      })

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

export const changeCategoryToDisplay = (category, currentLocation, radius) => {
  return function(dispatch){
    // Setting fixed data

    if(ClientConfig.env == 'prod'){
      let serviceLocations = ConstantServiceLocations
      let filterServiceLocations = serviceLocations.filter(poi => poi.category == category);

      dispatch({
        type: 'GET_SERVICE_LOC',
        payload: filterServiceLocations
      });
    }
    // Ending Setting fixed data


    if(ClientConfig.env == 'dev'){
      // Get data from Server
      axios.get(`${API_URL}/getServiceLocationByCategory`, {
        params: {
          categoryId: category,
          lng: currentLocation.lng,
          lat: currentLocation.lat,
          radius: radius
        }
      })
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
