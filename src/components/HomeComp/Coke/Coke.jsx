import { useNavigate } from 'react-router-dom'
import { assets, text } from '../../../assets/images/assets'
import styles from './coke.module.css'
import { motion } from 'framer-motion'

const Coke = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topText}>
          <motion.img
            initial={{ x: -150, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              x: { type: "spring", stiffness: 60, mass: 1 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={text.metallurgical_text}
            alt=""
          />
        </div>
        <div className={styles.bottomText}>
          <motion.img
            initial={{ x: 150, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              x: { type: "spring", stiffness: 60, mass: 1 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={text.coke_text}
            alt=""
          />
        </div>
      </div>
      <h2 onClick={() => navigate("/indestrial/metallurgical-coke")}>
        KNOW MORE
      </h2>
      <div className={styles.dryash}>
        <motion.img
          animate={{ y: [0, 100, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
          src={assets.coke_stone}
          alt=""
        />
      </div>
    </div>
  )
}

export default Coke
