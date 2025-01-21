import { stagger, useAnimate } from "motion/react";
import { transform } from "next/dist/build/swc";
import { useEffect } from "react";
import SplitType from "split-type";



const useTextRevealAnimation = () => {
  
  const [scope, animate] = useAnimate();

  useEffect(() => {
    new SplitType(scope.current, {  // Tomamos el texto del scope
      types: "lines,words",         // Dividimos el texto en líneas
      tagName: "span",              // y cada palabra se envuelve en un span -> se aplican estilos en css global -> translate-y-full (quedan ocultas)
    })
  },[scope]);

  const entranceAnimation = () => {
    return animate(scope.current.querySelectorAll(".word"), 
      {  
        transform: "translateY(0)", // Cuando entra la animación la palabra restablece su posición original y aparece
      },
      {
        duration: 0.5,
        delay: stagger(0.2)
      }
    )
  }

  return {
    scope,
    entranceAnimation,
  }
}

export default useTextRevealAnimation;