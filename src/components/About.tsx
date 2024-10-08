import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'

import { styles } from "../style"
import { fadeIn, textVariant } from "../utils/motion"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }: { index: number, title: string, icon: string, }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <p className="text-white text-[20px] font-bold text-center">{title}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Dart, TypeScript and
        JavaScript, and expertise in frameworks like Flutter, React, Next.js, and Node.js. 
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {
          services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");