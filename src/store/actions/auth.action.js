import {authConstant} from './../constants';
import {register,login,vocMean} from '../../https/index'
import axios from 'axios'



export const Register=(user)=>{
    return async(dispatch)=>{
        dispatch({type:authConstant.USER_REGISTER_REQUEST})
        try{
         await register(user)
          dispatch({type:authConstant.USER_REGISTER_SUCCESS,payload:"User Created Successfully!"})
        }
        catch(error){
          dispatch({type:authConstant.USER_REGISTER_FAILURE,payload:{err:error.response.data.message}})
        }
    }
}

export const Login=(admin)=>{
  return async(dispatch)=>{
    dispatch({type:authConstant.USER_LOGIN_REQUEST})
      try{
        const result=await login(admin)
        const {data} = result
          dispatch({type:authConstant.USER_LOGIN_SUCCESS,payload:"Login Successfully"})
        localStorage.setItem('token',data.tokens.access.token)
        localStorage.setItem('userRefreshToken',data.tokens.refresh.token)
        localStorage.setItem('user',JSON.stringify(data.user))
      }
      catch(error){
        dispatch({type:authConstant.USER_LOGIN_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}

export const UpdateUser=(id,user)=>{
  return async(dispatch)=>{
    dispatch({type:authConstant.USER_UPDATE_REQUEST})
      try{
        const token = localStorage.getItem('token')
       const result = await axios.patch(`${process.env.REACT_APP_ROOT}/v1/app/user/${id}`,user,{
          headers: {
            Authorization: token ? `Bearer ${token}` : ''//the token is a variable which holds the token
          }
        })

        const {data} = result
        
        localStorage.setItem('user',JSON.stringify(data))
          dispatch({type:authConstant.USER_UPDATE_SUCCESS,payload:"Updated Successfully"})
      }
      catch(error){
        dispatch({type:authConstant.USER_UPDATE_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}

export const VocMean=()=>{
  return async(dispatch)=>{
    dispatch({type:authConstant.GET_MEAN_REQUEST})
      try{
        const token = localStorage.getItem('token')
        const result = await axios.get(`${process.env.REACT_APP_ROOT}/v1/app/building/voc/mean`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : ''//the token is a variable which holds the token
          }
        })
        const {data} = result
          dispatch({type:authConstant.GET_MEAN_SUCCESS,payload:data.response})
      }
      catch(error){
        dispatch({type:authConstant.GET_MEAN_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}

export const TemperatureMean=()=>{
  return async(dispatch)=>{
    dispatch({type:authConstant.GET_TEMPERATURE_MEAN_REQUEST})
      try{
        const token = localStorage.getItem('token')
        const result = await axios.get(`${process.env.REACT_APP_ROOT}/v1/app/building/temperature/mean`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : ''//the token is a variable which holds the token
          }
        })
        const {data} = result
          dispatch({type:authConstant.GET_TEMPERATURE_MEAN_SUCCESS,payload:data.response})
      }
      catch(error){
        dispatch({type:authConstant.GET_TEMPERATURE_MEAN_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}

export const TemperatureGraph=()=>{
  return async(dispatch)=>{
    dispatch({type:authConstant.GET_TEMPERATURE_GRAPH_REQUEST})
      try{
        const token = localStorage.getItem('token')
        const result = await axios.get(`${process.env.REACT_APP_ROOT}/v1/app/building/temperature/graph`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : ''//the token is a variable which holds the token
          }
        })
        const {data} = result
          dispatch({type:authConstant.GET_TEMPERATURE_GRAPH_SUCCESS,payload:data})
      }
      catch(error){
        dispatch({type:authConstant.GET_TEMPERATURE_GRAPH_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_ERRORS });
};

// Clearing Messages
export const clearMessages = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_MESSAGES });
};