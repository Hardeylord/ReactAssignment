import React from 'react'
import Body from '../components/Body'
import Register from '../Auth/Register'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div>
      {/* <Register/> */}
      <Body />
    </div>
  )
}
