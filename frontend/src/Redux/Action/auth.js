import axios from "axios";
import { domain, header2 } from '../env'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

  LOGOUT,
} from "../type";



export const load_user = () => async (dispatch) => {
  const tokenget = window.localStorage.getItem('token')
    if (window.localStorage.getItem('token')) {
      await axios({
        method: "get",
        url: `${domain}/api/profile/`,
        headers: {
          Authorization: `token ${tokenget}`
        }
      }).then(res => {
        let user = res.data['data']
        // console.log(user)
        dispatch({
          type: "ADD_PROFILE",
          profile: user
        }
        )
      }).catch(e => {
          // console.log(e)
          dispatch({
            type: "ADD_PROFILE",
            profile: null
          })
         })
    }  else {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
}




export const login = (username, password) => async (dispatch) => {
    axios({
        url: `${domain}/api/login/`,
        method: "post",
        headers: header2,
        data: {
            "username": username,
            "password": password
        }
    }).then(response => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data,
          });
        window.localStorage.setItem('token', response.data['token'])
        window.location.href = "/"
    }).catch(eee => {
        alert("Username OR Password is invalid Try Agane !!")
        dispatch({
            type: LOGIN_FAIL,
          });
        // console.log(eee);
    })
     dispatch(load_user());
  };
  
  export const signup = (
    username,
    password
  ) => async (dispatch) => {

      await axios({
          method: "post",
          url: `${domain}/api/register/`,
          headers: header2,
          data: {
              "username": username,
              "password": password
          }
      }).then(response => {
          console.log(response.data);

          dispatch({
            type: SIGNUP_SUCCESS,
            payload: response.data,
          });
          // console.log(response.data["message"]);
          alert(response.data["message"])
      }).catch(err=>{
        dispatch({
          type: SIGNUP_FAIL,
        });
      })
  }



export const logout = () => (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
  
  