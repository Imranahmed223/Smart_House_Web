import axios from 'axios'


const token = window.localStorage.getItem("userToken")

const api = axios.create({
    baseURL: process.env.REACT_APP_ROOT,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        Accept: 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    },

  });

  export const register = (data) => api.post('/v1/app/auth/register', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })


export const login = (data)=>api.post('/v1/app/auth/login',{...data})
export const vocMean = ()=>api.get('/v1/app/building/voc/mean')