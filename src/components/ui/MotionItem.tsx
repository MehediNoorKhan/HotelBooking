// components/ui/MotionItem.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionItemProps {
  children: ReactNode;
  index: number;
  delayBase?: number;
}

export default function MotionItem({
  children,
  index,
  delayBase = 0.08,
}: MotionItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: delayBase * (index % 6), // Stagger every 6 items (one row)
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}