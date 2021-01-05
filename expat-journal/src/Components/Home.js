import React from 'react'
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routeToSignUp = () => {
    history.push('/signup');
  }

  return (
    <div className='home-wrapper'>
      <button 
        onClick={routeToSignUp}
      />
    </div>
  )
}