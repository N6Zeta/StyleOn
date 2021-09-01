import {ActionTypes} from './appdata.actiontypes'

export const fetchProducts = () => {
    return async function (dispatch) {
      const res = await fetch("http://localhost:4080/.netlify/functions/api/product/");
      const data = await res.json();
  
      dispatch(setProducts(data.products));
    };
  };
  
export const setProducts = (products = null) => {
    if (products) {
      return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
      };
    }
  
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: [],
    };
};


export const fetchServices = () => {
    return async function (dispatch) {
      const res = await fetch("http://localhost:4080/.netlify/functions/api/service/marketplace");
      const data = await res.json();
  
      dispatch(setServices(data.groomingServices));
      dispatch(setSalons(data.salons))
    };
  };
  
export const setServices = (services = null) => {
    if (services) {
      return {
        type: ActionTypes.SET_SERVICES,
        payload: services,
      };
    }
  
    return {
      type: ActionTypes.SET_SERVICES,
      payload: [],
    };
};

export const setSalons = (salons = null) => {
    if (salons) {
      return {
        type: ActionTypes.SET_SALONS,
        payload: salons,
      };
    }
  
    return {
      type: ActionTypes.SET_SALONS,
      payload: [],
    };
};