import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userId} = useParams();
  return (
    <div className=' bg-gray-600 text-center  text-3xl text-white' >User id :{userId}   </div>
  )
}

export default User