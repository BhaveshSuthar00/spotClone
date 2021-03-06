import axios from 'axios';
import {useEffect ,useState } from 'react'

export default  function useAuth(code){
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then((res)=>{
            console.log(res)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            console.log('sucess')
            window.history.pushState({}, null, "/")
        }).catch(()=>{
            console.log('herrrrrr')
            window.location.href = '/login'
        })
    }, [])
    // useEffect(() => {
    //     if (!refreshToken || !expiresIn) return
    //     const interval = setInterval(() => {
    //       axios
    //         .post("http://localhost:3001/refresh", {
    //           refreshToken,
    //         })
    //         .then(res => {
    //           setAccessToken(res.data.accessToken)
    //           setExpiresIn(res.data.expiresIn)
    //         })
    //         .catch(() => {
    //           window.location = "/"
    //         })
    //     }, (expiresIn - 60) * 1000)
    
    //     return () => clearInterval(interval)
    //   }, [refreshToken, expiresIn])
    
      return accessToken
}