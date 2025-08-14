'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const StairTransition = () => {
  const pathname = usePathname()
  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <motion.div
          className='h-screen w-screen fixed top-0 left-0 flex items-center justify-center bg-primary pointer-events-none z-40'
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
        >
          <span className='relative flex h-16 w-16'>
            <span className='animate-spin absolute inline-flex h-full w-full rounded-full border-4 border-accent border-t-transparent'></span>
          </span>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default StairTransition
