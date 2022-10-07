import styled from "styled-components"
import Welcome from "../components/Welcome"
import { animations } from "../lib/animations";
import {m} from "framer-motion"
import { useRouter } from 'next/router'
import { useState } from "react";




export default function Home() {
  const [animation, setAnimation] = useState(animations[2]);
  const router = useRouter()



  return (
   
    <Welcome />

  )
}
