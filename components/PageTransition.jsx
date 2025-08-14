'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 2, duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className='h-screen w-screen fixed top-0 left-0 flex items-center justify-center bg-primary pointer-events-none z-50 overflow-hidden'
        >
          {/* Animated background grid */}
          <div className='absolute inset-0'>
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className='w-full h-full opacity-[0.03]'
              style={{
                backgroundImage: `radial-gradient(circle, #00ff99 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Main loading container */}
          <div className='relative flex flex-col items-center gap-10'>
            {/* Logo/Brand area */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className='relative mb-4'
            >
              {/* Multiple rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='h-24 w-24 rounded-full border border-white/5 border-t-accent/30'
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='absolute inset-2 h-20 w-20 rounded-full border border-white/10 border-r-accent/50'
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='absolute inset-4 h-16 w-16 rounded-full border-2 border-white/5 border-t-accent'
              />

              {/* Center pulse */}
              <motion.div
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-accent rounded-full shadow-lg shadow-accent/50'
              />
            </motion.div>

            {/* Enhanced progress dots */}
            <div className='flex gap-3'>
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className='h-2 w-2 bg-accent rounded-full shadow-sm shadow-accent/40'
                />
              ))}
            </div>
          </div>

          {/* Corner accent elements */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-accent/40'
          />

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
              ease: 'easeInOut',
            }}
            className='absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-accent/40'
          />

          {/* Subtle gradient overlay */}
          <div className='absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary/20' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              delay: 2.3,
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
