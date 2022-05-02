import React from 'react'
import useAuth from '../../Hooks/useAuth'
const code = new URLSearchParams(window.location.search).get("code")

const Main = () => {
  // const accessToken = useAuth(code);
  // console.log(accessToken)  
  return (
    <div>Main</div>
  )
}

export default Main