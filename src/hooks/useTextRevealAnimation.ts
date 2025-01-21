import { stagger, useAnimate } from "motion/react";
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

  const exitAnimation = () => {
    return animate(scope.current.querySelectorAll(".word"), 
      {  
        transform: "translateY(100%)", // Cuando sale la animación la palabra se desplaza hacia abajo y desaparece
      },
      {
        duration: 0.3,
        delay: stagger(-0.025, {
          startDelay: scope.current.querySelectorAll(".word").length * 0.025
        })
      }
    )
  }

  return {
    scope,
    entranceAnimation,
    exitAnimation,
  }
}

export default useTextRevealAnimation;