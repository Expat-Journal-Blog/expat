import React, { useEffect } from 'react'

function NewUser({ details }) {

  useEffect(() => {
    console.log(details)
  }, [details]);

  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }
  
  return (
    <div className='user__container'>
      <h2>{details.username}</h2>
      <p>Email: {details.primaryemail}</p>
      <p>Password: {details.password}</p>
    </div>
  )
}

export default NewUser;