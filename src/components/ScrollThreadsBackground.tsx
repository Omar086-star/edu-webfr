// src/components/ScrollThreadsBackground.tsx
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollThreadsBackground() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 450], [0.75, 0]);
  const y = useTransform(scrollY, [0, 450], [0, -120]);
  const leftX = useTransform(scrollY, [0, 450], [0, -180]);
  const rightX = useTransform(scrollY, [0, 450], [0, 180]);
  const scale = useTransform(scrollY, [0, 450], [1, 1.25]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      style={{ opacity, y, scale }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-1/2"
        style={{ x: leftX }}
      >
        <Threads direction="left" />
      </motion.div>

      <motion.div
        className="absolute right-0 top-0 h-full w-1/2"
        style={{ x: rightX }}
      >
        <Threads direction="right" />
      </motion.div>
    </motion.div>
  );
}

function Threads({ direction }: { direction: "left" | "right" }) {
  const rotate = direction === "left" ? "-12deg" : "12deg";

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `rotate(${rotate})`,
        transformOrigin: direction === "left" ? "left center" : "right center",
      }}
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute block h-px w-[140%] bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[0.3px]"
          style={{
            top: `${8 + i * 5}%`,
            left: direction === "left" ? "-25%" : "-15%",
          }}
          animate={{
            x: direction === "left" ? [-20, -80, -20] : [20, 80, 20],
            opacity: [0.15, 0.65, 0.15],
          }}
          transition={{
            duration: 4 + i * 0.08,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}