

import { createContext, useContext,useEffect,useState } from "react";
import Router from "next/router";



export const navContext = createContext();

export const useNav = () => {
    const context = useContext(navContext)
    return context
} 

export function NavProvider({children}){

   const [nav, setNav] = useState(0)
   const [animation, setAnimation] = useState('open')
   const [animationWork, setAnimationWork] = useState('open')
   const [activateWorks, setActivateWorks] = useState(false);
   const [activateProfile, setActivateProfile] = useState(true);


   /*useEffect(()=>{
    if(nav === 1){
      setAnimation('close')
      setAnimationWork('open')
      setTimeout(() => {
        Router.push('/works')  
      }, 1000);
      
    }else if(nav === 0){
      setActivateProfile(true)
      setAnimation('open')
      setAnimationWork('close')
      Router.push('/')
      //setActivateWorks(false)
    }else if(nav === 2){
      setAnimation('close')
      setAnimationWork('close')
      Router.push('/ilustrations')
    }
  
},[nav])*/



useEffect(()=>{

    if(nav <= 0){
        setNav(0)
    }else if(nav >=3){
        setNav(3)
    }


    
  },[nav])




   return(
      <navContext.Provider value={{
          nav,
          animation,
          animationWork,
          activateWorks,
          activateProfile,
          setAnimation,
          setAnimationWork,
          setActivateProfile,
          setNav
        }}>{children}</navContext.Provider>
    );
}
