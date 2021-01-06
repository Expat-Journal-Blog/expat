import React from 'react'
import { useHistory } from "react-router-dom";
import ButtonBases from "./ButtonBases";

export default function Home() {
  const history = useHistory();

  const routeToSignUp = (images) => {
    //   console.log(images.target.innerText);
      if (images.target.innerText === "Sign Up") {
        history.push('/signup');
      } else {
        history.push('/login');
      }
  }

  return (
    <div className='home-wrapper'>
        <ButtonBases click={routeToSignUp}/>
    </div>
  )
}