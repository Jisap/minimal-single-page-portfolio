"use client"

import { FC, useEffect } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "motion/react";




const Hero: FC = () => {

  const [titleScope, titleAnimate ] = useAnimate(); // titleScope es la Ref para el elemento a animar con titleAnimate

  useEffect(() => {
    new SplitType(titleScope.current, { // SplitType crea un div con cada linea y un span dentro por cada palabra de la linea con las clases line and word
      types: "lines,words",
      tagName: "span"
    });

    titleAnimate(titleScope.current.querySelectorAll(".word"),{ // Aplica una animación de traslación en el eje Y desde 0 a 100 (css global)
      transform: "translateY(0)" 
    },{
      duration: .5,
      delay: stagger(.2)
    })
  },[])

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1 
              ref={titleScope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
            >
              Crafting digital experiences through code and creative desing
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-20 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75
                }}
              >
                <Button 
                  variant="secondary"
                  iconAfter={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                      />
                    </svg>
                  }  
                >
                  <span>
                    View My Work
                  </span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2
                }}
              >
                <Button variant="text">
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image 
              src={heroImage}
              alt="Hero Image"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
