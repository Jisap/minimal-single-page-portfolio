"use client"


import { FC, useEffect } from "react";
import { stagger, useAnimate, useInView } from "motion/react";
import SplitType from "split-type";

const Intro: FC = () => {

  const [scope, animate] = useAnimate();  //scope is the element that will be animated
  const inView = useInView(scope, {       //inView is a boolean that will be true when the element is in view
    once: true,                           //the animation will only run once
  });        

  useEffect(() => {
    new SplitType(scope.current.querySelectorAll('h2'), { // SplitType crea un div con cada linea y un span dentro por cada palabra de la linea con las clases line and word
      types: "lines,words",
      tagName: "span",
    })
  },[scope])

  useEffect(() => {
    if(inView){
    animate(
      scope.current.querySelectorAll('.word'), 
      {
        transform: "translateY(0%)",
      },
      {
        duration: 0.5,
        delay:stagger(0.2)
      }
    )}
  },[inView])

  return (
    <section 
      ref={scope}
      className="section mt-12 md:mt-16 lg:mt-20" id="intro"
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean clode and thoughtful design to help your business grow and stand out online
        </h2>
      </div>
    </section>
  ) 
};

export default Intro;
