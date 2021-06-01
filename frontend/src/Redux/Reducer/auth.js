import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  
    LOGOUT,
  } from "../type";

const initialState = {
    token: window.localStorage.getItem('token'),
    isAuthenticated: null,
    profile: null,
  };
  
  export const Auth = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
     
      case LOGIN_SUCCESS:
   
        window.localStorage.setItem('token', payload['token'])
        return {
          ...state,
          isAuthenticated: true,
          token: payload['token'],
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
        };
      case USER_LOADED_SUCCESS:
        return {
          ...state,
          profile: payload,
        };
      
      case USER_LOADED_FAIL:
        return {
          ...state,
          profile: null,
        };
    
      case LOGIN_FAIL:
      case SIGNUP_FAIL:
      case LOGOUT:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          profile: null,
        };
      default:
        return state;
    }
  };
  