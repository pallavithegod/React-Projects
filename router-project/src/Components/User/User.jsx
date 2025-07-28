import React from 'react'
import { useParams } from 'react-router'

function User() {
  const {userid} = useParams();
  return (
    <>
    User: {userid}
    </>
  )
}

export default User
