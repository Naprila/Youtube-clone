import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    // make an API call to check token exist or not and based on that 
  })

  return ( loggedIn && (
    <div className=' text-3xl text-center m-3'>
      <FontAwesomeIcon icon={faUserCircle} className=' '/>
    </div>
  )
  )
}

export default Profile