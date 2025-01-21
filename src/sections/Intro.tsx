"use client"


import { FC, useEffect, useRef } from "react";
import { useInView } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";



const Intro: FC = () => {

  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation, } = useTextRevealAnimation();
  const inView = useInView(scope, {       //inView is a boolean that will be true when the element is in view
    once: true,                           //the animation will only run once
  });  
  
  useEffect(() => {
    if(inView){
      entranceAnimation()
    }
  },[inView, entranceAnimation])

  return (
    <section 
      ref={sectionRef}
      className="section mt-12 md:mt-16 lg:mt-20" id="intro"
    >
      <div className="container">
        <h2 
          ref={scope}
          className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]"
        >
          Building beautiful websites with clean clode and thoughtful design to help your business grow and stand out online
        </h2>
      </div>
    </section>
  ) 
};

export default Intro;
