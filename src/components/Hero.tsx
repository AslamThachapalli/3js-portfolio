import {motion} from 'framer-motion';

import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='rounded-full h-5 w-5 bg-[#915EFF]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-[#915EFF]'>Aslam</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a Website and <br className='sm:block hidden' />
            Mobile App developer
          </p>
        </div>
      </div>

      {/* <div className='absolute bottom-0 w-full lg:h-full h-[70%] bg-red-50'>
        <ComputersCanvas />
      </div> */}

      <div className='absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[32px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start p-2'>
            <motion.div 
            animate={{
              y: [0, 25, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero