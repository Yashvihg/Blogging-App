import { Children } from "react";
import { AnimatePresence, motion } from "framer-motion";

function AnimationWrapper({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className,
}) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      key={keyValue}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimationWrapper;
