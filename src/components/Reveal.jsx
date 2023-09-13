import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Reveal = ({ children, width = 'fit-content' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true})
    const mainControls = useAnimation();
useEffect(()=>{
    mainControls.start("visible")
}, [isInView])

  return (
    <div ref={ref} className="relative">
          <motion.div variants={{hidden:{opacity:0, y:75}, visible:{opacity:1,y:0}}} initial="hidden" animate={mainControls} transition={{duration:0.5, delay:0.5}}>
      {children}
    </motion.div>
    </div>
  
  );
};

export default Reveal;
