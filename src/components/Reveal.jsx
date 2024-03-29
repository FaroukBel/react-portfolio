import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    //   slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-100">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { top: "0%" },
          visible: { top: "100%" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, ease:"easeIn" }}
        className="absolute left-0 right-0 top-4 bottom-4 bg-sea-blue z-20"
      ></motion.div> */}
    </div>
  );
};

export default Reveal;
