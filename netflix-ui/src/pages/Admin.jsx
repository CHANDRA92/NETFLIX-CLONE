import React, { useEffect } from 'react'
import Netflix from './Netflix'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



export default function Admin() {
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        if (user.email.split('@')[1]!== 'netflix.com')
          navigate('/',{replace: true})
        console.log(user.email);
      } 
      else {
        console.log("No user is signed in");
      }
    });
  },[]);

  return (
    <>
    <Netflix />
    {/* console.log('admin') */}


    </>
  )
}
