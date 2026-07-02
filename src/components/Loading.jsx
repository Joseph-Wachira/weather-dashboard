import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex justify-center items-center my-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
      />
    </div>
  );
}