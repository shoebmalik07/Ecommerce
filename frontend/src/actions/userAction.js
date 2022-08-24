import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT} from '../constants/userConstant'
import axios from 'axios'



export const login = (email,password)=>async(dispatch)=>{
  try {
    dispatch({type:USER_LOGIN_REQUEST})

    const config = {
      headers:{
        'content-type':'application/json',

      },
    }
    const {data} = axios.post('/api/users/login',{email,password}, config)

    dispatch({type:USER_LOGIN_SUCCESS, payload: data})

    localStorage.setItem('userInfo', JSON.stringify(data))


  } catch (err) {
    dispatch({
      type:USER_LOGIN_FAIL,
      payload: err.response && err.response.data.message?err.response.data.message:err.message
    })
    
  }
}