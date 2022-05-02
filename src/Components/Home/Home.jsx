import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
const code = new URLSearchParams(window.location.search).get("code")
const Home = () => {
  useEffect(() => {
    axios.get('http://localhost:3001/login', {
        code,
    }).then((res)=>{
        console.log(res)
        // setAccessToken(res.data.accessToken)
        // setRefreshToken(res.data.refreshToken)
        // setExpiresIn(res.data.expiresIn)
        console.log('sucess')
        // window.history.pushState({}, null, "/")
    }).catch(()=>{
        console.log('herrrrrr')
        // window.location.href = '/login'
    })
}, []) 
  return (
    <>
        home
    </>
  )
}

export default Home