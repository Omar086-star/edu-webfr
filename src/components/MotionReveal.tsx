// src/components/MotionReveal.tsx
import { motion } from "framer-motion";

export default function MotionReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 60,
        rotate: -2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: [0, -3, 3, -2, 1, 0],
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}