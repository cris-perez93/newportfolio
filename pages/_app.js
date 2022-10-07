import '../styles/globals.css'
import { NavProvider } from '../context/NavContext'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import { useContext, useState } from 'react';
import { animations } from "../lib/animations"
import Navigation from '../components/Navigation';
import styled from '@emotion/styled'
import DotRing from '../components/DotRing/DotRing';
import { MouseContext } from '../context/MouseContext';
import MouseContextProvider from '../context/MouseContext';

const ContainerNav=styled.div`

position:absolute ;
z-index:10 ;
`



function MyApp({ Component, pageProps,router }) {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[0]);
  const [exitBefore, setExitBefore] = useState(false);

  console.log(startIndex)
 
  return(
    
    <MouseContextProvider>
     <DotRing />
     <ContainerNav>
      <Navigation/>
     </ContainerNav>
    <LazyMotion features={domAnimation}>
      
      <AnimatePresence exitBeforeEnter={!exitBefore} >
   
        <m.div
          key={router.route.concat(animation.name)}
          className="page-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animation.variants}
          transition={animation.transition}
        >
          
          <NavProvider>
            
          <Component {...pageProps} 
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")} />
          </NavProvider>
         
        </m.div>
        
      </AnimatePresence>
      
    </LazyMotion>

    </MouseContextProvider> 

  ) 
}

export default MyApp
