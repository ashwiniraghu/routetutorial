import React from 'react'
import { useParams } from 'react-router-dom'
function UserDetails() {
const params =useParams()
  return (
    <div>UserDetails {params.userId}</div>
  )
}

export default UserDetails