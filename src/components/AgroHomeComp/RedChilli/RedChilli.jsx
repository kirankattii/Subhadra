import { useNavigate } from 'react-router-dom'
import styles from './RedChilli.module.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { assets, text } from '../../../assets/images/assets'

const RedChilli = () => {
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()
  // Check for screen width below 600px
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)")
    setIsMobile(mediaQuery.matches)

    const handleResize = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleResize)

    return () => {
      mediaQuery.removeEventListener("change", handleResize)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topText}>
          <img
            src={text.chilliLight}
            alt=""
          />
        </div>
        <div className={styles.middleText}>
          <img
            src={text.chilliDark}
            alt=""
          />
        </div>
        <div className={styles.bottomText}>
          <img
            src={text.chilliLight}
            alt=""
          />
        </div>
      </div>
      <h2 onClick={() => navigate("/agro/red-chilli")}>KNOW MORE</h2>

      <div className={styles.gingers}>
        <div className={styles.ginger1}>
          <motion.img
            animate={{ y: isMobile ? [0, -50, 0] : [0, -100, 0] }} // Change animation values based on screen width
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
            src={assets.red1}
            alt="ginger"
          />
        </div>
        <div className={styles.ginger2}>
          <motion.img
            animate={{ y: isMobile ? [0, 50, 0] : [0, 100, 0] }} // Adjust animation values
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
            src={assets.red2}
            alt="ginger"
          />
        </div>
        <div className={styles.ginger3}>
          <motion.img
            animate={{ y: isMobile ? [-35, 35, -35] : [-70, 70, -70] }} // Modify the range of motion
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
            src={assets.red3}
            alt="ginger"
          />
        </div>
      </div>
    </div>
  )
}

export default RedChilli
